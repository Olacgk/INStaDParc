import React from 'react'
import './styles.scss'
import Button from '../../components/button'
import Table from '../../components/table'
import { Demandes_List } from '../../data'

export default function ListDemande() {

  const columns = [
    { field: 'id', headerName: 'Id', headerAlign: 'center', width: 80 },
    { field: 'date_demande', headerName: 'Date de la demande',  headerAlign: 'center', width: 150 },
    { field: 'demandeur', headerName: 'Demandeur', headerAlign: 'center', width: 150 },
    { field: 'description', headerName: 'Description',  headerAlign: 'center', width: 150 },
    { field: 'cadre', headerName: 'Cadre de la demande',  headerAlign: 'center', width: 150 },
    { field: 'etat', headerName: 'Etat de la demande', headerAlign: 'center', width: 150 },
  ];
  return (
    <div>
      <div className='heading'>
        <h2>Liste des demandes</h2>
        <Button title={"Ajouter"}/>
      </div>
      <div className='listDemande'>
        <div className='demande_mat'>
          <h3>Demande de matériels</h3>
          <Table columns={columns} rows={Demandes_List}/>
        </div>
        <div className='assign_mat'>
          <h3>Demande d'assignation</h3>
          <Table columns={columns} rows={Demandes_List}/>
        </div>
        
      </div>
    </div>
  )
}
