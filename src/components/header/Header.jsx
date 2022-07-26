import React from "react";
import "./Header.css";
import Navbar from "../navbar/Navbar";
import Search from "../search/Search";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import cat from "../assets/cat.jpg";
import videobg from "./videobg.mp4";
//the body of header component is within 'return'..
//navbar is imported from another component
function Header() {
  return (
    <div className="header-box">
      <video src={videobg} autoPlay loop muted />

      <div className="header">
        <section className="header-top-navbar">
          <Navbar />
        </section>

        <div className="header-top">
          <section className="header-top-logo">
            <a href="#" className="header-logo">
              <img src={cat}></img>
            </a>
          </section>

          <section>
            <hr className="header-top-seperator" />
          </section>
        </div>

        <div className="header-bottom">
          <section className="header-bottom-item">
            <AiFillPhone />
            +34 645 8170 86
          </section>

          <section className="header-bottom-item">
            <AiOutlineMail /> mreza.shidfar@gmail.com
          </section>
          <section>
            <form className="searchsec">
              <label className="form-label">
                <a href="#" className="search-link">
                  Search <BiSearchAlt2 />
                </a>
              </label>
              <Search />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Header;
