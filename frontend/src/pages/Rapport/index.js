import React from 'react'
import './styles.scss'
import Button from '../../components/button'
import Table from '../../components/table'
import { Rapport_List } from '../../data';
import { MdDownload } from 'react-icons/md'

export default function Rapport() {
    const columns = [
        { field: 'id', headerName: 'Id', headerAlign: 'center', width: 80 },
        { field: 'date_emission', headerName: 'Date d\'emission',  headerAlign: 'center', width: 150 },
        { field: 'auteur', headerName: 'Auteur', headerAlign: 'center', width: 150 },
        { field: 'description', headerName: 'Description',  headerAlign: 'center', width: 150 },
        { field: 'etat', headerName: 'Etat de la demande', headerAlign: 'center', width: 150 },
        { field: 'col7', headerName: 'Actions', headerAlign: 'center', width: 80,
            renderCell: () => {
            return (
                <>
                <MdDownload className='downloadButton'/>
                </>
            )
            } }
      ];
  return (
    <div>
        <div className='heading'>
            <h2>Rapports</h2>
            <Button title={"Editer un rapport"} hasLink={true} link={'/new-material'}/>
        </div>
        <div className='rapport'>
            <Table columns={columns} rows={Rapport_List}/>
        </div>
    </div>
  )
}
