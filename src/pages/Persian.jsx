import React from "react";
import perone from "../assets/perone.jpg";
import pertwo from "../assets/pertwo.jpg";
import perthree from "../assets/perthree.jpg";
import perfour from "../assets/perfour.jpg";
import perfive from "../assets/perfive.jpg";
import persix from "../assets/persix.jpg";
import "./Persian.css";

function Persian() {
  return (
    <>
      <h1>Persian Cats</h1>
      <div className="persbox">
        <img src={perone} width="50px" height="50px" />
        <img src={pertwo} width="50px" height="50px" />
        <img src={perthree} width="50px" height="50px" />
        <img src={perfour} width="50px" height="50px" />
        <img src={perfive} width="50px" height="50px" />
        <img src={persix} width="50px" height="50px" />
      </div>
    </>
  );
}

export default Persian;
