import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Bill from "./pages/bill/Bill.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bill" element={<Bill />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
