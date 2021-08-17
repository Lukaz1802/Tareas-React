import React from 'react'

const EmpleadoAvatar = (props) => {
    let empleadosAvatar = props.empleados;
    return (
        <>
        { empleadosAvatar.map((empleados, index)=>(
<div key={index}>
          <img className="empleadosAvatar" width="120px" src={empleados.pic} alt="img-avatar"/>  
      </div>
            ))
        }
    </>
    )
}

export default EmpleadoAvatar
