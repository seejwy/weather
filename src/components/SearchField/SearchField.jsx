import { useState } from 'react'
import './SearchField.css'
import Search from '../../assets/images/Search.png';

export default function SearchField({onSearch}) {
  const [city, setCity] = useState('Singapore');
  const [country, setCountry] = useState('SG');

  async function handleSubmit(e) {
    e.preventDefault();
    onSearch(city);
  }

  function handleCityInputChange(e) {
    setCity(e.target.value);
  }

	return(
		<form onSubmit={handleSubmit}>
      <label htmlFor="country-input">
        <div className="label">Country</div>
        <input id="country-input" type="text" onInput={handleCityInputChange} />
      </label>
			<button type="submit">
        <span className="material-symbols-outlined">search</span>
      </button>
		</form>
	);
}