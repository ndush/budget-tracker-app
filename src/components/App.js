import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Home";
import Reviews from "./Reviews"
import SignIn from "./SignIn.js"
import Budget from "./Budget"
import Remaining from "./Remaining"
import  ExpenseTotal from "./ ExpenseTotal"
//import MealDetails from "../details/MealDetails";

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar/>
      </div>
      <div className='row mt-3'>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/reviews" element={<Reviews/>}></Route>
        <Route exact path="/sign-in" element={<SignIn/>}></Route>
        <Route exact path="/budget" element={<Budget/>}></Route>
        <Route exact path="/remaining" element={<Remaining/>}></Route>
        <Route exact path="/expenses" element={<ExpenseTotal/>}></Route>
        
      </Routes>
</div>
    </Router>
   
  )
}

export default App;
