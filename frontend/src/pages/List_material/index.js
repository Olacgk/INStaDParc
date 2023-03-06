import React, { useEffect, useState } from 'react'
import './styles.scss'
import Button from '../../components/button'
import Table from '../../components/table'
import { MdDelete, MdEdit } from 'react-icons/md'
import { FaEye } from 'react-icons/fa'
// import { Material_List } from '../../data'

export default function ListMaterial() {

  const columns = [
    // { selector: row => row. 'id', name: 'Id', headerAlign: 'center', width: 80 },
    { selector: row => row.numImmatriculation , name: 'Num. Immatriculation'},
    { selector: row => row.type , name: 'Type' },
    { selector: row => row.marque , name: 'Marque' },
    { selector: row => row.etat , name: 'Etat' },
    { selector: row => row.available , name: 'Disponibilité' },
    {  name: 'Actions',
    cell: () => {
      return (
        <>
        <button onClick={()=>{}} className='deleteButton'> <MdDelete size={'20px'}/> </button>
        <button onClick={()=>{}} className='editButton'> <MdEdit size={'20px'}/> </button>
        <button onClick={()=>{}} className='detailButton'> <FaEye size={'20px'}/> </button>
        </>
      )
    } },
  ];

  const [materials, setMaterials] = useState([])

      useEffect(() => {
        fetch('http://localhost:8080/api/material/get-materials')
        .then(res => res.json())
        .then(data => {
          setMaterials(data)
        })
        .catch(err => console.error(err))
      }, [])
      console.log(materials)
  return (
    <div>
      <div className='heading'>
        <h2>Liste de matériels</h2>
        <Button title={"Ajouter"} hasLink={true} link={'/new-material'}/>
      </div>
      <Table columns={columns} rows={materials}/>
    </div>
  )
}
