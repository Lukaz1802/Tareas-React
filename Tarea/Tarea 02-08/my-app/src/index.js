import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import RouteApp from '../src/routeo/routes/RouteApp'
import "bootstrap/dist/css/bootstrap.min.css"


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouteApp />,
  document.getElementById('root')
);


