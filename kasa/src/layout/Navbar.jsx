import React from "react"
import "./Navbar.scss"
import { Link } from "react-router-dom";

function Navbar () {
    return (
      <div className="navbar">       
        <img src="./Logo/_Header.png" alt="Logo kasa" />
        <nav className="nav">
          <Link to="/acceuil">
            <p>Acceuil</p> 
          </Link>
          <Link to="/about">
            <p>A propos</p>
          </Link> 
        </nav>              
      </div>
    );
  }

export default Navbar