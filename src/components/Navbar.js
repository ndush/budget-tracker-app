import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light" >
      <div className="container-fluid">
        <ul className="navbar-nav" >
          <li className="nav-item" >
            <Link className="nav-link" to="/" style={{color:"blue"}}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/budget" style={{color:"blue"}}>
              Budget
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
