    import React from 'react'
    import EmpleadoAvatar from './EmpleadoAvatar';
    import '../App.css';
    import { Row, } from 'react-bootstrap';

    const empleados=[
      {
          id: 1,
          fullName: "Laya Dueñas",
          title: "CEO",
          department: "Business",
          pic: "https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg",
        },
        {
          id: 2,
          fullName: "Astryd Vallés",
          title: "CMO",
          department: "Marketing",
          pic: "https://image.flaticon.com/icons/png/512/206/206855.png",
        },
        {
          id: 3,
          fullName: "Shantell Meza",
          title: "CFO",
          department: "Business",
          pic: "https://image.flaticon.com/icons/png/512/206/206881.png",
        },
  ]

    const EmpleadoRow = (props) => {
        let EmpleadoRow = props.empleados;
        return (
            <>
          
        <Row xs={3}>
          
          <EmpleadoAvatar empleados={empleados} />
          
                { 
                
                EmpleadoRow.map((empleados, index)=>(
                   
                   
                    <div className="empleadosList" key={index}>
                        <h2>{empleados.fullName}</h2>
                        <h3>{empleados.title}</h3>
                        <h3>{empleados.department}</h3>
                    </div>
                   
                   

                ))} 
               </Row>
            </>
        )
    }
    
    export default EmpleadoRow
    