import React from 'react'
import '../App.css';

const EmpleadoAvatar = (props) => {
    let empleadosAvatar = props.empleados;
    return (
        <>
        { empleadosAvatar.map((item, index)=>(
<div key={index}>
          <img className="empleadosAvatar" width="120px" src={item.pic} alt="img-avatar"/>  
      </div>
            ))
        }
    </>
    )
}

export default EmpleadoAvatar
