import React, { use, useState } from "react";
import Country from "../country/Country";
import "../../App.css";

const Countris = ({ allCountris }) => {
  const countris = use(allCountris);
  const countries = countris.countries;

  const [visitedCountry, stateVisitedCountry] = useState([]);
  const [flagsOfCountry, stateFlagsOfCountry] = useState([]);

  const handleVisitedCountry = (country) => {
    const newVisitedCountry = [...visitedCountry, country];
    stateVisitedCountry(newVisitedCountry);
  };

  const handleFlags =(country) => {
    console.log("Flags adding....", country);
    const newCountryFlag = [...flagsOfCountry, country];
    stateFlagsOfCountry(newCountryFlag);

  }

  return (
    <>
      <div className="main-body">
        <h1>Total Country: {countris.countries.length}</h1>
        <div className="visit-count">
          <div>
            <h2>Visited country: {visitedCountry.length}</h2>
            <div>
              <ol>
                {visitedCountry.map((selectCountry) => (
                  <li>{selectCountry.name.common}</li>
                ))}
              </ol>
            </div>
          </div>

          <div>
            <h2>Visited Flag</h2>
            <div className="flags-container">
              {flagsOfCountry.map((flags) => (
                <img className="flags" src={flags.flags.flags.png} alt={flags.flags.flags.png} />
              ))}
            </div>
          </div>
        </div>
        <div className="card">
          {countries.map((country) => (
            <Country key={country.ccn3.ccn3} country={country} handleVisitedCountry={handleVisitedCountry} handleFlags={handleFlags}></Country>
          ))}
        </div>
      </div>
    </>
  );
};

export default Countris;
