import React, { use } from 'react';
import Country from '../country/Country';
import '../../App.css'

const Countris = ({ allCountris }) => {
  const countris = use(allCountris);
  const countries = countris.countries;
  
  return (
    <>
      <div className="card">
        <h1>Total Country: {countris.countries.length}</h1>
        {countries.map((country) => (
          <Country key={country.ccn3.ccn3} country={country}></Country>
        ))}
      </div>
    </>
  );
};

export default Countris;