import React from "react";
import "./Sidebar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../pages/Layout";
import Home from "../../pages/Home";
import Persian from "../../pages/Persian";
import British from "../../pages/British";
import NoPage from "../../pages/NoPage";
import Form from "../../pages/Form";
function Sidebar() {
  return (
    <div className="sidemenu">
      <div className="router">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="persian" element={<Persian />} />
              <Route path="british" element={<British />} />
              <Route path="form" element={<Form />}></Route>
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Sidebar;
