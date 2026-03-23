import React from "react";

const Country = ({ country }) => {
//   console.log(country.ccn3.ccn3);
  return (
    <div className="cardComponent">
      <img src={country.flags.flags.svg} alt={country.flags.flags.png} />
      <div>
        <h3>{country.name.common}</h3>

        <p>Population: {country.population.population}</p>
        <p>Country Code: {country.ccn3.ccn3}</p>
      </div>
    </div>
  );
};

export default Country;
