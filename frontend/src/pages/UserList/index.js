import React, { useState, useEffect } from 'react'
import './styles.scss'
import Table from '../../components/table'
import { MdDelete, MdEdit } from 'react-icons/md'
import { FaEye } from 'react-icons/fa'
import Button from '../../components/button'
// import { UsersList } from '../../data'
// import { Link, useNavigate} from 'react-router-dom'

export default function UserList() {

  // const navigate = useNavigate();
  
  const deleteUser = (id) => {
    fetch(`/api/user/delete-user/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }).then((res)=> {
      if (!res.ok) {
        throw new Error("Une erreur s'est produite lors de la suppression de l'utilisateur")
      }
      return res.json()
    })
      .then((data)=> {console.log('Utilisateur supprimé avec succès',data)
      clearTimeout(
        setTimeout(() => {
          alert('Utilisateur supprimé avec succès')
        }, 2000)
      )
      // navigate('/liste-utilisateurs')
    })
      .catch((err)=> console.log('Erreur lors de la suppression de l\'utilisateur',err))
  }

    const columns = [
        // { selector: 'id', name: 'Id', headerAlign: 'center', width: 80 },
        { selector: row=> row.name, sortable: true, name: 'Nom'},
        { selector: row=>row.prenom, sortable: true, name: 'Prénoms'},
        { selector: row=>row.email, sortable: true, name: 'Email'},
        { selector: row=>row.service, sortable: true, name: 'Service'},
        { selector: row=>row.role, sortable: true, name: 'Rôle'},
        { name: 'Actions',cell: () => {
          return (
            <>
              {/* <Link to={`/edit-user/:${users.id}`}>
                <MdEdit key={users.id} className='editButton'/>
              </Link>
              <FaEye className='detailButton'/>
              <MdDelete className='deleteButton'/> */}
              <button onClick={deleteUser} className='deleteButton'> <MdDelete size={'20px'}/> </button>
              <button onClick={()=>{}} className='editButton'> <MdEdit size={'20px'}/> </button>
              <button onClick={()=>{}} className='detailButton'> <FaEye size={'20px'}/> </button>
            </>
          )
        } },
      ];


      const [users, setUsers] = useState([])

      useEffect(() => {
        fetch('/api/user/get-users')
        .then(res => res.json())
        .then(data => {

          setUsers(data)
        })
        .catch(err => console.error(err))
      }, [])

  return (
    <div>
      <div className='heading'>
          <h2>Liste des utilisateurs</h2>
          <Button title={"Ajouter"} hasLink={true} link={'/new-user'}/>
      </div>
      <Table columns={columns} rows={users} keyField={users._id} />
    </div>
  )
}
