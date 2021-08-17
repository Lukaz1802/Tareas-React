import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Boton from './Boton'

const InicioBaner = () => {
    return (
      
          <>
          <Row>
              <Col xs>
              <img width="600px" src="https://cdn.pixabay.com/photo/2021/08/03/11/48/canal-6519196_960_720.jpg"/>  
              </Col>
              <Col xs={8}>
              <h2>Titulo</h2>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque perspiciatis voluptate labore obcaecati ut natus aspernatur assumenda accusamus omnis soluta accusantium quis excepturi, ducimus quibusdam iusto? Sit dolore corporis nonLorem ipsum, dolor sit amet consectetur adipisicing elit. Neque perspiciatis voluptate labore obcaecati ut natus aspernatur assumenda accusamus omnis soluta accusantium quis excepturi, ducimus quibusdam iusto? Sit dolore corporis nonLorem ipsum, dolor sit amet consectetur adipisicing elit. Neque perspiciatis voluptate labore obcaecati ut natus aspernatur assumenda accusamus omnis soluta accusantium quis excepturi, ducimus quibusdam iusto? Sit dolore corporis nonLorem ipsum, dolor sit amet consectetur adipisicing elit. Neque perspiciatis voluptate labore obcaecati ut natus aspernatur assumenda accusamus omnis soluta accusantium quis excepturi, ducimus quibusdam iusto? Sit dolore corporis nonLorem ipsum, dolor sit amet consectetur adipisicing elit. Neque perspiciatis voluptate labore obcaecati ut natus aspernatur assumenda accusamus omnis soluta accusantium quis excepturi, ducimus quibusdam iusto? Sit dolore corporis nonLorem ipsum, dolor sit amet consectetur adipisicing elit. Neque perspiciatis voluptate labore obcaecati ut natus aspernatur assumenda accusamus omnis soluta accusantium quis excepturi, ducimus quibusdam iusto? Sit dolore corporis non.</p>
                 <Boton />   
                 <p className="text-sm mt-2">Descripcion corta</p>            
                 </Col>
          </Row>
           
                 </>
       

       
    )
}

export default InicioBaner
