import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidemenu">
      <ul>
        <li>
          <a href="#">Persian</a>
        </li>
        <li>
          <a href="#">siami</a>
        </li>
        <li>
          <a href="#">Himalian</a>
        </li>
        <li>
          <a href="#">British</a>
        </li>
        <li>
          <a href="#">Scotish</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
