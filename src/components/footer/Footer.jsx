import React from "react";
import {
  AiFillPhone,
  AiOutlineMail,
  AiFillCamera,
  AiOutlineFacebook,
  AiFillTwitterSquare,
  AiOutlineHeart,
  AiOutlineCopyright,
} from "react-icons/ai";
import "./Footer.css";
import catlogo from "./catlogo.jpg";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="info">
          <li className="logo">
            <img src={catlogo} width="50px"></img>
          </li>
          <li>
            <AiFillPhone /> +645817086
          </li>
          <li>
            <AiOutlineMail />
            mani82.sh82@gmail.com
          </li>
          <li>
            <AiFillCamera /> manishidfar
          </li>
        </div>
        <div className="info">
          <li>Persian Cats</li>
          <li>Himalian</li>
          <li>Scotich</li>
          <li>Siami</li>
        </div>
        <div className="info webAddress">
          <li>
            <a href="https://cat-bounce.com/">https://cat-bounce.com/</a>
          </li>
          <li>
            <a href="https://www.cat.com/global-selector.html">
              https://www.cat.com/global-selector.html
            </a>
          </li>
          <li>
            <a href="https://web.gencat.cat/en/inici/index.html">
              https://web.gencat.cat/en/inici/index.html
            </a>
          </li>
          <li className="twit-face">
            <a href="https://facebook.com">
              <AiOutlineFacebook />
            </a>
            <a href="https://www.twitter.com">
              <AiFillTwitterSquare />
            </a>
          </li>
        </div>
      </div>
      <p className="text">
        <AiOutlineCopyright />
        this website is design with <AiOutlineHeart /> by Mani
      </p>
    </footer>
  );
}

export default Footer;
