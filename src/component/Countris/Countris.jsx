import React, { use } from "react";
import Country from "../country/Country";
import "../../App.css";

const Countris = ({ allCountris }) => {
  const countris = use(allCountris);
  const countries = countris.countries;

  return (
    <>
      <div className="main-body">
        <h1>Total Country: {countris.countries.length}</h1>
        <div className="visit-count">
          <h2>Visited country: </h2>
          <h2>Not visited coountr: </h2>
        </div>
        <div className="card">
          {countries.map((country) => (
            <Country key={country.ccn3.ccn3} country={country}></Country>
          ))}
        </div>
      </div>
    </>
  );
};

export default Countris;
