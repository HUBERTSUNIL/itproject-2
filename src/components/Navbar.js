import React from 'react'
import { Link } from "react-router-dom";
import logo from '../images/logo.png'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" id='home'>
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/home">
          <img src={logo} alt="" width="120" height="44" className="d-inline-block align-text-top" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/data">Analysis</Link>
            </li>
          </ul>
          <div>
            <ul className="navbar-nav d-flex justify-content-end">
              <li class="nav-item dropdown px-3 d-flex">
                <Link class="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-regular fa-user fa-xl"></i>
                </Link>
                <ul class="dropdown-menu w-25">
                  <li><Link class="dropdown-item w-25" to="/">Logout</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
