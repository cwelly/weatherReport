import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"; 
import React from "react";
import Header from "../component/Header";

const Router = () => (
  <BrowserRouter>
  <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  </BrowserRouter>
);

export default Router;
