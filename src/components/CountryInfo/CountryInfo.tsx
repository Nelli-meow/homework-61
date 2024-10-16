import * as React from 'react';

const CountryInfo = ({country}) => {
  if (!country) {
    return <span>Select country</span>;
  }

  return (
    <div>
      <div className="d-flex m-5 justify-content-evenly">
        <div>
          <h2>Country name: {country.name}</h2>
          <h3>Capital: {country.capital}</h3>
          <div>
            <strong>Population:</strong>
            <p>{country.population}</p>
          </div>
        </div>

        <div>
          <img src={country.flag} alt={`${country.name} flag`} width="100"/>
        </div>
      </div>

      <div className="d-flex flex-column">
        <h3>Borders with:</h3>
        <ul className="list-group list-group-flush">
          {country.borders && country.borders.length > 0 ? (
            country.borders.map((border, index) => (
              <li
                className="list-group-item"
                key={index}
              >{border}</li>
            ))
          ) : (
            <li className="list-group-item">No border countries</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CountryInfo;