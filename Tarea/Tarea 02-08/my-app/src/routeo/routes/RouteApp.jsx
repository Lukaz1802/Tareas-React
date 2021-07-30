import React from 'react'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Navbar  from '../components/Navbar';
import Inicio from '../pages/Inicio';
import Servicios from '../pages/Servicios';
import Nosotros from '../pages/Nosotros'
import Contacto from '../pages/Contacto'
import Error404 from '../pages/Error404';
import ProtectedRoute from '../../helpers/ProtectedRoute';
import Login from '../pages/Login'

const RouteApp = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
        <ProtectedRoute exact path="/" component={Inicio} />
        <ProtectedRoute exact path="/contacto" component={Contacto}/>
        <ProtectedRoute exact path="/servicios" component={Servicios}/>
        <ProtectedRoute exact path="/nosotros" component={Nosotros}  />
        <Route exact path="/login" component={Login}  />
        <Route path="*" component={Error404}  />
            </Switch>

        </Router>
    )
}

export default RouteApp
