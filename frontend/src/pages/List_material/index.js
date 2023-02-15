import React from 'react'
import './styles.scss'
import Button from '../../components/button'
import Table from '../../components/table'
import { MdDelete, MdEdit } from 'react-icons/md'
import { FaEye } from 'react-icons/fa'
import Dashboard from '../../components/Dashboard'
import { Material_List } from '../../data'

export default function ListMaterial() {

  const columns = [
    { field: 'id', headerName: 'Id', headerAlign: 'center', width: 80 },
    { field: 'numImm', headerName: 'Num. Immatriculation',  headerAlign: 'center', width: 175 },
    { field: 'type', headerName: 'Type', headerAlign: 'center', width: 150 },
    { field: 'marque', headerName: 'Marque',  headerAlign: 'center', width: 150 },
    { field: 'Etat', headerName: 'Etat',  headerAlign: 'center', width: 150 },
    { field: 'date_acquisition', headerName: 'Date d\'acquisition', headerAlign: 'center', width: 150 },
    { field: 'col7', headerName: 'Actions', headerAlign: 'center', width: 80,
    renderCell: () => {
      return (
        <>
          <MdEdit className='editButton'/>
          <FaEye className='detailButton'/>
          <MdDelete className='deleteButton' />
        </>
      )
    } },
  ];

  return (
    <Dashboard>
      <div className='heading'>
        <h2>Liste de matériels</h2>
        <Button title={"Ajouter"} hasLink={true} link={'/new-material'}/>
      </div>
      <Table columns={columns} rows={Material_List}/>
    </Dashboard>
  )
}
