import React from 'react';
import './App.css';
import Tareas from './components/Tareas';

const App = () => {
  return ( 
    <>
    <div>
     <h1>Bienvenido</h1>
     <hr/>
     <h2>Ingresa tus tareas</h2>
      <Tareas />
      </div>
     </>
  );
}



export default App;
