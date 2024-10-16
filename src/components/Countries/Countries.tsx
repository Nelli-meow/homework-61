import * as React from 'react';
import { URL_COUNTRIES } from '../../constants.ts';
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

  return (
    <div>
      <ul className="list-group">
        {countries.map((country) => (
          <li
            key={country.id}
            className="list-group-item border border-bottom-2 m-3"
          >{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;