import React from 'react'
import { Link } from "react-router-dom";
import logo from '../images/logo.png'
const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
                <img src={logo}  alt="" width="120" height="64" className="d-inline-block align-text-top"/>
        </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/data">Data</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
