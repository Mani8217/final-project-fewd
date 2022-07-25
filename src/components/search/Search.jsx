import "./Search.css";
import React from "react";
import { useState } from "react";
import JSONDATA from "../../csvjson.json";
import "./Search.css";
function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="srch">
        <input
          type="text"
          placeholder="search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {JSONDATA.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div className="user" key={key}>
              <p>{val.first_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Search;
