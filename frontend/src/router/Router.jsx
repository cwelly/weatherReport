import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"; 
import React from "react";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  </BrowserRouter>
);

export default Router;
