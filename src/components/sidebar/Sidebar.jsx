import React from "react";
import "./Sidebar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../pages/Layout";
import Home from "../../pages/Home";
import Persian from "../../pages/Persian";
import British from "../../pages/British";
import NoPage from "../../pages/NoPage";
function Sidebar() {
  return (
    <div className="sidemenu">
      <div className="router">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Persian />} />
              <Route path="contact" element={<British />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Sidebar;
