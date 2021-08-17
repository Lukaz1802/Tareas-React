import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Card = (props) => {
    let datos = props.datos;
    return (
        <>
            { datos.map((item, index)=>(
<Row>
              <Col key={index} xs={2}>
              <img width="150px" src={item.url}/>  
              </Col>
              <Col xs={2}>
              <h2>{item.name}</h2>
                <p>{item.descripcion}</p>
                 <p className="text-sm mt-2">Descripcion corta</p>            
                 </Col>
          </Row>



                ))
            }
             
        </>
    )
}

export default Card
