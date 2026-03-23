import React, { useState } from "react";

const Country = ({ country }) => {

  const [setvisit, stateSetvisit] = useState(false);

    

    const handleClick = ()=>{
      // if(setvisit ==true){
      //   stateSetvisit(false);
      // }else{
      //   stateSetvisit(false);
      // }
      // stateSetvisit(setvisit ? false : true);
      stateSetvisit(!setvisit);
    }


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
        <button className={`${setvisit ? "visited-button" : ""}`} onClick={handleClick}>
          {setvisit ? "Visited" : "Not Visited"}
        </button>
      </div>
    </div>
  );
};

export default Country;
