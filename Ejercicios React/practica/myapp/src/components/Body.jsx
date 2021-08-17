import { Row, Col } from 'react-bootstrap'
import Card from './Card'

const datos=[
    {
        name:"name",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque perspiciatis voluptate labore obcaecati ut",
        url:"https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_960_720.jpg"
    },   
    {
        name:"name2",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque perspiciatis voluptate labore obcaecati ut",
        url:"https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_960_720.jpg"
    },  
    {
        name:"name3",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque perspiciatis voluptate labore obcaecati ut",
        url:"https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_960_720.jpg"
    }   
]

const Body = () => {
    return (
        <>
            <Row>
             <Col xs={6}>
              <h2 className="text-center">Titulo de body</h2>
                <p className="text-center"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque perspiciatis voluptate labore obcaecati ut natus aspernatur assumenda accusamus omnis soluta accusantium quis excepturi, ducimus quibusdam iusto? Sit dolore corporis nonLorem ipsum, dolor sit amet consectetur adipisicing elit. Neque perspiciatis voluptate labore obcaecati ut natus aspernatur assumenda accusamus omnis soluta accusantium quis excepturi, ducimus quibusdam iusto? Sit dolore corporis nonLorem ipsum, dolor sit amet consectetur adipisicing elit. Neque perspiciatis voluptate labore obcaecati ut natus aspernatur assumenda accusamus omnis soluta accusantium quis excepturi, ducimus quibusdam iusto? Sit dolore corporis nonLorem ipsum, dolor sit amet consectetur adipisicing elit. Neque perspiciatis voluptate labore obcaecati ut natus aspernatur assumenda accusamus omnis soluta accusantium quis excepturi, ducimus quibusdam iusto? Sit dolore corporis nonLorem ipsum, dolor sit amet consectetur adipisicing elit. Neque perspiciatis voluptate labore obcaecati ut natus aspernatur assumenda accusamus omnis soluta accusantium quis excepturi, ducimus quibusdam iusto? Sit dolore corporis nonLorem ipsum, dolor sit amet consectetur adipisicing elit. Neque perspiciatis voluptate labore obcaecati ut natus aspernatur assumenda accusamus omnis soluta accusantium quis excepturi, ducimus quibusdam iusto? Sit dolore corporis non.</p>          
                 </Col>
                 <Col xs={6}>
              <h2 className="text-center">Titulo de opciones</h2>
                    <li className="text-center">Opción 1</li>
                    <li className="text-center">Opción 2</li>
                    <li className="text-center">Opción 3</li>
                    <li className="text-center">Opción 4</li>
                    <li className="text-center">Opción 5</li>
                 </Col>
                 </Row>
                <Card datos={datos}/>
               
        </>
    )
}

export default Body
