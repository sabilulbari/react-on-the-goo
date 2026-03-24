import React, { useState } from "react";

const Country = ({ country, handleVisitedCountry, handleFlags }) => {
  const [setvisit, stateSetvisit] = useState(false);
  const [setFlag, stateSetFlag] = useState(false);

  const handleVisited = () => {
    // if(setvisit ==true){
    //   stateSetvisit(false);
    // }else{
    //   stateSetvisit(false);
    // }
    // stateSetvisit(setvisit ? false : true);

    stateSetvisit(!setvisit);
    handleVisitedCountry(country);
  };

  const handleClickFlags = () => {
    stateSetFlag(!setFlag);
    handleFlags(country);
  };

  //   console.log(country.area.area);
  return (
    <div className={`cardComponent ${setvisit ? "visited-card" : ""}`}>
      <img src={country.flags.flags.svg} alt={country.flags.flags.png} />
      <div>
        <h3>{country.name.common}</h3>

        <p>Population: {country.population.population}</p>
        <p>Country Code: {country.ccn3.ccn3}</p>
        <p>
          Area: {country.area.area} {country.area.area > 300000 ? <h3>"Big Country"</h3> : <h3>"Small Country"</h3>}
        </p>
        <button className={`${setvisit ? "visited-button" : ""}`} onClick={handleVisited}>
          {setvisit ? "Visited" : "Not Visited"}
        </button>
        <button className={`${setFlag ? "visited-button" : ""}`} onClick={handleClickFlags}>
          {setFlag ? "Flags Added" : " + Flags"}
        </button>
      </div>
    </div>
  );
};

export default Country;
