import React,{useState} from 'react'


const HelloWorld = ({mensaje}) => {

const [msj, setMsj] = useState(mensaje)

const ClickMe=()=>{
    // msj="Hola"
    setMsj("(from changed state)!")
}

    
    return (
        <div>
            <h1>Hello World {msj}
            </h1>
        <button onClick={ClickMe}>Click me</button>
        </div>
    )
}

export default HelloWorld
