import React from "react";
//Componentes
import Home from "./components/Home";
import Login from "./components/Login";
//Funciones Helpers

//Librerias
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CoinNavbar from "./components/CoinNavbar";
import ProtectedRoutes from "./helpers/ProtectedRoutes";


const App = () => {
  return (
    <Router>
 ----------------     Navbar aqui.----------------
      <Switch>
        <ProtectedRoutes exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
        <Route path="*" component={()=>("pagina 404")}/>
      </Switch>
      ----------------    Footer aqui.----------------
      </Router>
  );
};
export default App;