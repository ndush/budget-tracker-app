import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Budget from "../Budget";


function App() {
  return (
    <Router basename>
      <div >
        <Navbar />
      </div>
      <div className="row mt-3">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/budget" element={<Budget />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
