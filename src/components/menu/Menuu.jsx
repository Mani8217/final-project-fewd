import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import "./Menuu.css";

function Menuu() {
  const [style, setStyle] = useState(".menu-container");

  const changeStyle = () => {
    setStyle("menu-container2");
    if (style == "menu-container2") {
      setStyle("menu-container");
    }
  };
  return (
    <div className={style}>
      <div className="menu-container style">
        <button type="button" onClick={changeStyle}>
          <AiOutlineBars />
        </button>

        <menu className="hidden-menu">
          <li>
            <a href="#" className="navbar-link">
              profile
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              Gallrty
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              Albums
            </a>
          </li>
        </menu>
      </div>
    </div>
  );
}
export default Menuu;
