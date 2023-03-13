import React from 'react'
import './styles.scss'
import Button from '../../components/button'
import Table from '../../components/table'
import { Demandes_List } from '../../data'

export default function ListDemande() {

  const columns = [
    // { selector: 'id', name: 'Id', headerAlign: 'center', width: 80 },
    { selector: row => row.date_demande, name: 'Date de la demande'},
    { selector: row => row.demandeur, name: 'Demandeur' },
    { selector: row => row.typeDemande, name: 'Type de demande'},
    { selector: row => row.etat, name: 'Etat de la demande' },
    { selector: row => row.date_validation, name: 'Date de validation' },
    {name: 'Actions',cell: (row) => {
      return (
        <>
        <button className='deleteButton'> Valider </button>
        <button className='editButton'> Rejeter </button>
        <button>Détail</button>
        </>
      )
    }}
  ];
  return (
    <div>
      <div className='heading'>
        <h2>Liste des demandes</h2>
        <Button title={"Ajouter"} hasLink={true} link={'/demande-materiel'}/>
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
