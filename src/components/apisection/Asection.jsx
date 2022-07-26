//here we import the methods and styling file we need to add to our project

import React, { useState } from "react";
import Axios from "axios";
import "./Asection.css";

// this function will call an Api by Axios method ..

const Asection = () => {
  const [cat, setCat] = useState("");
  //axios method is an readable and easy way to call an API , and has a get method.
  Axios.get(
    `https://api.thecatapi.com/v1/images/search?${process.env.REACT_GOOGLE_API_KEY}`
  ).then((response) => {
    //setTimeout method is a callback function to revoke a function ..
    setTimeout(() => {
      setCat(response.data[0].url);
    }, 3000);
  });

  return (
    <div className="kitty-box">
      <h3>Cat Photos</h3>
      <p className="img-span">
        <img src={cat} className="kitty" />
      </p>

      <p>Julia Wilson is the founder of Cat-World,...</p>
    </div>
  );
};

// to export the component:
export default Asection;
