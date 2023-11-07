import React from 'react'
import { Link } from 'react-router-dom'
const NavbarGuest = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
                <img src="../images/logo.png"  alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                Medical Log
        </Link>
        </div>
      </nav>
    </div>
  )
}

export default NavbarGuest
