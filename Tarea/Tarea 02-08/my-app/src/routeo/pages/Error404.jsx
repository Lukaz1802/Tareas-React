import React from 'react'
import { Link, } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <h1>Error 404!!!</h1>
            <Link className="navbar-brand" to="/">
          <button className="btn btn-info" >
          Volver a Inicio
          </button>
          </Link>
        </div>
    )
}

export default Error404


