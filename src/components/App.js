import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Home";
import About from "./About"
import Reviews from "./Reviews"
import SignIn from "./SignIn.js"
import Budget from "./Budget"
//import MealDetails from "../details/MealDetails";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      </div>

      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/reviews" element={<Reviews/>}></Route>
        <Route exact path="/sign-in" element={<SignIn/>}></Route>
        <Route exact path="/budget" element={<Budget/>}></Route>
        
      </Routes>

    </Router>
   
  )
}

export default App;
