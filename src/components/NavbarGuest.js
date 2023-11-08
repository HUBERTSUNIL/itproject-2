import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
const NavbarGuest = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/guest">
                <img src={logo}  alt="" width="120" height="44" className="d-inline-block align-text-top"/>
        </Link>
        </div>
      </nav>
    </div>
  )
}

export default NavbarGuest
