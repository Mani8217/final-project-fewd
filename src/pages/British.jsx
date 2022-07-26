import React from "react";
import britone from "../assets/britone.jpg";
import brittwo from "../assets/brittwo.jpg";
import britthree from "../assets/britthree.jpg";
import britfour from "../assets/britfour.jpg";
import britfive from "../assets/britfive.jpg";
import britsix from "../assets/britsix.jpg";
import "./Persian.css";

function British() {
  return (
    <>
      <h1>British cats</h1>
      <div className="persbox">
        <img src={britone} width="50px" height="50px" />
        <img src={brittwo} width="50px" height="50px" />
        <img src={britthree} width="50px" height="50px" />
        <img src={britfour} width="50px" height="50px" />
        <img src={britfive} width="50px" height="50px" />
        <img src={britsix} width="50px" height="50px" />
      </div>
    </>
  );
}

export default British;
