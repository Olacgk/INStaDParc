import React from 'react'
import './styles.scss'
import Dashboard from '../../components/Dashboard'
import Table from '../../components/table'
import { MdDelete } from 'react-icons/md'
import { FaEye } from 'react-icons/fa'
import Button from '../../components/button'
import { UsersList } from '../../data'
import UserModal from '../../components/userModal'

export default function UserList() {

    const columns = [
        { field: 'id', headerName: 'Id', headerAlign: 'center', width: 80 },
        { field: 'nom', headerName: 'Nom',  headerAlign: 'center', width: 150 },
        { field: 'prenom', headerName: 'Prénoms', headerAlign: 'center', width: 150 },
        { field: 'email', headerName: 'Email',  headerAlign: 'center', width: 150 },
        { field: 'service', headerName: 'Service',  headerAlign: 'center', width: 150 },
        { field: 'role', headerName: 'Rôle', headerAlign: 'center', width: 150 },
        { field: 'col7', headerName: 'Actions', headerAlign: 'center', width: 100,
        renderCell: () => {
          return (
            <>
              {/* <MdEdit className='editButton'/> */}
              <UserModal className='editButton'/>
              <FaEye className='detailButton'/>
              <MdDelete className='deleteButton' />
            </>
          )
        } },
      ];

  return (
    <Dashboard>
        <div>
            <div className='heading'>
                <h2>Liste des utilisateurs</h2>
                <Button title={"Ajouter"} hasLink={true} link={'/new-user'}/>
            </div>
            <Table columns={columns} rows={UsersList}/>
        </div>
    </Dashboard>
  )
}
