import React from 'react'
import './styles.scss'
import Table from '../../components/table'
import { MdDelete, MdEdit } from 'react-icons/md'
import { FaEye } from 'react-icons/fa'
import Button from '../../components/button'
import { UsersList } from '../../data'
import { Link} from 'react-router-dom'

export default function UserList() {
  
  // const location = useLocation();
  // var splitPath = location.pathname.split("/")
  // var id = splitPath[splitPath.length-1]

  // const user = UsersList[id]

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
              <Link to={`/edit-user/${UsersList.id}`}>
                <MdEdit key={UsersList.id} className='editButton'/>
              </Link>
              <FaEye className='detailButton'/>
              <MdDelete className='deleteButton' />
            </>
          )
        } },
      ];

  return (
    <div>
      <div className='heading'>
          <h2>Liste des utilisateurs</h2>
          <input type='files' accept='.xlsx' id='file'/>
          <Button title={"Ajouter"} hasLink={true} link={'/new-user'}/>
      </div>
      <Table columns={columns} rows={UsersList}/>
    </div>
  )
}
