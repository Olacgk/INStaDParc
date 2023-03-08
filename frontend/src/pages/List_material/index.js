import React, { useEffect, useState } from 'react'
import './styles.scss'
import Button from '../../components/button'
import Table from '../../components/table'
import { MdDelete, MdEdit } from 'react-icons/md'
import { FaEye } from 'react-icons/fa'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
// import { Material_List } from '../../data'

export default function ListMaterial() {
  
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [severity, setSeverity] = useState('');
  const [alertTitle, setAlertTitle] = useState('');

  const columns = [
    // { selector: row => row. 'id', name: 'Id', headerAlign: 'center', width: 80 },
    { selector: row => row.numImmatriculation , name: 'Num. Immatriculation'},
    { selector: row => row.type , name: 'Type' },
    { selector: row => row.marque , name: 'Marque' },
    { selector: row => row.etat , name: 'Etat' },
    { selector: row => row.available , name: 'Disponibilité' },
    {  name: 'Actions',
    cell: (row) => {
      return (
        <>
        <button onClick={()=> deleteMat(row._id)} className='deleteButton'> <MdDelete size={'20px'}/> </button>
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

      const deleteMat = (id) => {
        fetch(`/api/material/delete-material/${id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        }).then((res)=> {
          if (!res.ok) {
            throw new Error("Une erreur s'est produite lors de la suppression du matériel")
          }
          return res.json()
        })
          .then((data)=> {
            setSeverity('success')
            setShowAlert(true)
            setAlertTitle('Succès')
            setAlertMessage('Matériel supprimé avec succès')
            console.log('Matériel supprimé avec succès',data)
            setMaterials(materials.filter((mat)=> mat._id !== id))
        })
          .catch((err)=> { 
            setSeverity('error')
            setShowAlert(true)
            setAlertTitle('Erreur')
            setAlertMessage('Une erreur s\'est produite lors de la suppression du matériel')
            console.log('Erreur lors de la suppression du matériel',err)})
      }
  return (
    <div>
      {showAlert && <Alert severity={severity} onClose={() => setShowAlert(false)}>
        <AlertTitle>{alertTitle}</AlertTitle>
        {alertMessage}
      </Alert>}
      <div className='heading'>
        <h2>Liste de matériels</h2>
        <Button title={"Ajouter"} hasLink={true} link={'/new-material'}/>
      </div>
      <Table columns={columns} rows={materials}/>
    </div>
  )
}
