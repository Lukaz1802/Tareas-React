import React from 'react';

const BorrarTarea = ({tarea, index, deleteTarea}) => {
    return (
        <>
        <div className="list">
        <h3>{tarea} <button className="btn-delete" onClick={() => deleteTarea(index)}>X</button></h3>
        </div>
    </>
    )
}
export default BorrarTarea
