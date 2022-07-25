import React from "react";
import Header from "./components/header/Header";
import Asection from "./components/apisection/Asection";
import Sidebar from "./components/sidebar/Sidebar";
import Video from "./components/myvideo/Video";
import Menuu from "./components/menu/Menuu";
import Article from "./components/article/Article";
import Footer from "./components/footer/Footer";
import Option from "./components/options/Option";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

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
            <div className="router">
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </div>

        <div className="mygallery">
          <Article id="gallery" />
        </div>

        <div className="vcantin">
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
