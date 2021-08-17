import React from 'react'
import EmpleadoRow from './EmpleadoRow'

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

const EmpleadoList = () => {
    return (
        <div>
            <EmpleadoRow empleados={empleados} />
        </div>
    )
}

export default EmpleadoList
