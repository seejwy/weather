import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Today's Weather</h1>
      <hr />
      <form>
        <label for="city-input">City</label><input id="city-input" type="text" />
        <label for="country-input">Country</label><input id="country-input" type="text" />
        <input type="submit" />
        <input type="reset" />
      </form>
      <section>
        <div>Johor, MY</div>
        <div>Clouds</div>
        <dl>
          <dt>Description</dt>
          <dd>scattered clouds</dd>

          <dt>Temperature</dt>
          <dd>303.15C ~ 306.15C</dd>

          <dt>Humidity</dt>
          <dd>58%</dd>

          <dt>Time</dt>
          <dd>2021-03-16 03:15pm</dd>
        </dl>
      </section>
      <section>
        <h2>Search History</h2>
        <hr />
        <ol>
          <li>
            <div>Johor, MY</div>
            <div>
              <div>03:15:02pm</div>
              <button>Magnifying Glass</button>
              <button>Trash Can</button>
            </div>
          </li>
        </ol>
      </section>
    </>
  )
}

export default App
