import React, { useState } from 'react'

const AdmColor = () => {

    const [color, setColor] = useState([
    ])
    const [inputValue, setInputValue] = useState('')
    
    
    const change=({target})=>{
        setInputValue(target.value)
    }
    


    return (
        <div>
             <form>
            <div className="form-group">
            <input type="text"
             className="form-control" 
             placeholder="Escriba el color"
             value={inputValue}
             onChange={change}
             >
            </input>
            <button>Guardar</button>
            </div>
        </form>
        </div>
    )
}

export default AdmColor
