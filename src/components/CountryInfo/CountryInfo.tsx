import * as React from 'react';

const CountryInfo = () => {
  return (
    <div>
      <span>Select country</span>

      <div className="d-flex mb-5">
        <div>
          <h2>Country name:</h2>
          <h3>Capital:</h3>
          <strong>Population:</strong>
        </div>

        <div>
          <img src=""/>
        </div>
      </div>

      <div className="d-flex flex-column">
        <h3>Borders with:</h3>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default CountryInfo;