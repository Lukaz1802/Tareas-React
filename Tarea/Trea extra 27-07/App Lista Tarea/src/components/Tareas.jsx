import React, {useEffect, useState} from 'react'
import BorrarTarea from './BorrarTarea'

const Tareas = () => {    
    const [tareas, setTareas] = useState([
    ])
    const [inputValue, setInputValue]=useState('')

    useEffect(() => {
     let data =   localStorage.getItem('Tareas');
     if(data != null){
         setTareas(JSON.parse(data));
     }else{
         setTareas([])
     }
      }, [])


const change=({target})=>{
setInputValue(target.value)
}
const creoTarea=(e)=>{
    e.preventDefault()
    // console.log(inputValue)
    if(inputValue.length>3){
        setTareas([
            ...tareas,
            {
                tarea:inputValue,
            }
        ])
    }
    setInputValue('')
}

useEffect(() => {
    localStorage.setItem('Tareas', JSON.stringify(tareas))
  }, [tareas])

    
    const deleteTarea = indice => {
        const newTareas = [...tareas]
        newTareas.splice(indice, 1)
        setTareas(newTareas)
    }

    return (
        <>
        <form onSubmit={creoTarea}>
            <div className="form-group">
            <input type="text"
             className="form-control" 
             placeholder="Escriba la tarea"
             value={inputValue}
             onChange={change}
             >
            </input>
            </div>
        </form>
        {       tareas.map((value, index) => (
                    <BorrarTarea tarea={value.tarea} key={index} index={index} deleteTarea={deleteTarea} />


                ))
        }
        </>
    )
}

export default Tareas
