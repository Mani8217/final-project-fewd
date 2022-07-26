import React from "react";
import Header from "./components/header/Header";
import Asection from "./components/apisection/Asection";
import Sidbar from "./components/sidebar/Sidebar";
import Video from "./components/myvideo/Video";
import Menuu from "./components/menu/Menuu";
import Article from "./components/article/Article";
import Footer from "./components/footer/Footer";
import Option from "./components/options/Option";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="body">
        <div className="header">
          <Menuu />
          <Header />
        </div>

        <div className="main">
          <div className="asection">
            <Asection id="profile" />
          </div>

          <div className="sidenav">
            <Sidbar />
          </div>
        </div>

        <div className="mygallery">
          <Article id="gallery" />
          <Video id="albums" />
        </div>

        <div className="option-container">
          <Option />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
