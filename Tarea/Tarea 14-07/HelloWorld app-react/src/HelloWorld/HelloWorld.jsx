import React from 'react'


const HelloWorld = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello World {props.saludo}
        

            </h1>
        </div>
    )
}

export default HelloWorld
