import { useEffect, useState } from 'react'
import SearchField from './components/SearchField/SearchField';
import HistoryList from './components/HistoryList/HistoryList';
import HistoryItem from './components/HistoryItem/HistoryItem';
import cloud from './assets/images/cloud.png';
import './App.css'
import { formatTimestamp } from './utils/dateUtils';

function App() {
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    search();
  }, []);

  async function search(city = "Singapore", country = "SG") {
    let geoResponse;
    try {
      geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=b53da51f6e453474b1b9863698a935be`);
    } catch(e) {
      console.log({e});
    }

    const geoData = await geoResponse.json();

    if(geoData.length) { // location found
      const { lat, lon } = geoData[0];
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=b53da51f6e453474b1b9863698a935be`);
      const data = await response.json();
      setHistory([{...data, id: Date.now()}, ...history]);
      setWeather(data);
    } else {
      // error
      setWeather(null);
    }
  }

  function removeItem(itemId) {
    const newHistory = history.filter(item => item.id != itemId);
    setHistory(newHistory);
  }

  return (
    <div className="wrapper">
      <SearchField onSearch={search} />
      <div className="weather-wrapper">
        <h1>Today's Weather</h1>
        {
          weather ? 
          <>
            <img className="weather-icon" src={cloud} />
            <section className="current-weather">
              <div>
                <div className="current-temperature">{ weather.main.temp.toFixed() }°</div>
                <div className="temperature-range">H: { weather.main.temp_max.toFixed() }° L: { weather.main.temp_min.toFixed() }°</div>
                <div className="country hide-on-desktop">{ weather.name }, { weather.sys.country }</div>
              </div>
              <div>
                <div>{ weather.weather[0].main }</div>
                <div>Humidity: { weather.main.humidity }%</div>
                <div>{ formatTimestamp(weather.dt) }</div>
                <div className="country hide-on-mobile">{ weather.name }, { weather.sys.country }</div>
              </div>
            </section>
          </> 
          : 
          <div className="not-found">No found</div>
        }
        
        { history.length ?
          <section> 
            <HistoryList>
              {
                history.map((item) => (
                  <HistoryItem key={item.id} item={item} onSearch={setWeather} onRemove={removeItem} />
                ))
              }
            </HistoryList>
          </section> : null
        }
      </div>
    </div>
  )
}

export default App
