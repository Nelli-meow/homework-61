import * as React from 'react';
import { URL_ALPHA_CODE, URL_COUNTRIES } from '../../constants.ts';
import { useEffect, useState } from 'react';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const getAllCountries = async () => {
    const dataCountries = await fetch(URL_COUNTRIES);
    const response = await dataCountries.json();

    setCountries(response);
  }

  useEffect(() => {
    getAllCountries();
  }, []);

  const getCountryInfo = async (alphaCode) => {
    const dataCountry = await fetch(`${URL_ALPHA_CODE}${alphaCode}`);
    const response = await dataCountry.json();
    console.log(response.name);
  }


  return (
    <div>
      <ul className="list-group">
        {countries.map((country) => (
          <li
            key={country.alpha3Code}
            className="list-group-item"
            onClick={() => getCountryInfo(country.alpha3Code)}
          >{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;