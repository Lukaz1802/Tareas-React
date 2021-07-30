import React from 'react'

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          Routeo-Tarea
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                className="nav-link"
                exact
                to="/"
                activeStyle={{
                  fontWeight:"bold"
                }}
                >
                    Inicio
                </NavLink>
              </li>
              <li className="nav-item">
              
              <NavLink
                className="nav-link"
                exact
                to="/Servicios"
                activeStyle={{
                  fontWeight:"bold"
                }}
                >
                    Servicios
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/Nosotros"
                activeStyle={{
                  fontWeight:"bold"
                }}
                >
                Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/Contacto"
                activeStyle={{
                  fontWeight:"bold"
                }}
                >
                    Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
