import * as React from 'react';
import { URL_ALPHA_CODE, URL_COUNTRIES } from '../../constants.ts';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Countries = ({setCountryInfo}) => {
  const [countries, setCountries] = useState([]);

  const getAllCountries = async () => {
    try {
      const response = await axios(URL_COUNTRIES);
      setCountries(response.data);
    } catch (error) {
      console.log( error);
    }
  };

  useEffect(() => {
    void getAllCountries();
  }, []);

  const getCountryInfo = async (alphaCode) => {
    try {
      const response = await axios(`${URL_ALPHA_CODE}${alphaCode}`);
      setCountryInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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