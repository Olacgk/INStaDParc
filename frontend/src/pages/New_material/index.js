import React, {useState, useRef, useEffect} from 'react'
import './styles.scss'
import Button from '../../components/button'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { BiArrowBack } from 'react-icons/bi'

export default function NewMaterial() {

  const numImmFieldRef = useRef();
  const typeFieldRef = useRef();
  const projetFieldRef = useRef();
  const proprietaireFieldRef = useRef();
  const descriptionFieldRef = useRef();
  const disponibiliteFieldRef = useRef();
  const marqueFieldRef = useRef();
  const reformeFieldRef = useRef();
  const dateAcquisitionFieldRef = useRef();
  const dateMiseEnServiceFieldRef = useRef();
  const etatFieldRef = useRef();
  
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [severity, setSeverity] = useState('');
  const [alertTitle, setAlertTitle] = useState('');

  const createMaterial = (materialData) => {
    fetch("http://localhost:8080/api/material/new-material", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(materialData)
    }).then((res)=> {
      if (!res.ok) {
        throw new Error("Une erreur s'est produite lors de l'ajout du matériel")
      }
      return res.json()
    })
      .then((data)=> {
        setSeverity('success')
        setShowAlert(true)
        setAlertTitle('Succès')
        setAlertMessage(`Matériel ${numImmFieldRef?.current?.value} créé avec succès`)
      console.log('Matériel créé avec succès',data)
    })
      .catch((err)=> {
        setSeverity('error')
        setShowAlert(true)
        setAlertTitle('Erreur')
        setAlertMessage("Une erreur s'est produite lors de la création du matériel")
        console.log('Erreur lors de la création du matériel',err)})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const materialData = {
      numImm: numImmFieldRef.current.value,
      type: typeFieldRef.current.value,
      projet: projetFieldRef.current.value,
      proprietaire: proprietaireFieldRef.current.value,
      description: descriptionFieldRef.current.value,
      available: disponibiliteFieldRef.current.value,
      marque: marqueFieldRef.current.value,
      reforme: reformeFieldRef.current.value,
      dateAcquisition: dateAcquisitionFieldRef.current.value,
      dateMiseEnService: dateMiseEnServiceFieldRef.current.value,
      etat: etatFieldRef.current.value
    }
    createMaterial(materialData)
  }

  const [types, setTypes] = useState([]);
  const [marques, setMarques] = useState([]);

  useEffect(() => {
    fetch('/api/type/get-types')
      .then(res => res.json())
      .then(data => {
        setTypes(data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    fetch('/api/marque/get-marques')
      .then(res => res.json())
      .then(data => {
        setMarques(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <form className='newMateriel_form' onSubmit={handleSubmit}>
      <div className='newMat_form_backButton'>
        <Button title={<BiArrowBack/>} hasLink={true} link={'/materials'} />
      </div>
      {showAlert && <Alert severity={severity} onClose={() => setShowAlert(false)}>
        <AlertTitle>{alertTitle}</AlertTitle>
        {alertMessage}
      </Alert>}
      <h2 className='newMateriel_title'>Ajouter un nouveau matériel</h2>
      <div className='newMateriel_form_mainContainer'>
        <div className='newMateriel_form_lgroup'>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Numéro d'immatriculation</label>
            <input type='text' className='formInput' placeholder='INSTAD/INSTAD/ORD/20/010' ref={numImmFieldRef} id='numImm' required/>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Type</label>
            <select name="choice" className='formInput' ref={typeFieldRef} id='type' required>
              {types.map((type, index) => (
                <option key={index} value={type._id}>{type.nomType}</option>
              ))}
            </select>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Projet</label>
            <input type='text' className='formInput' ref={projetFieldRef} id='projet' required />
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Propriétaire</label>
            <select name="choice" className='formInput' ref={proprietaireFieldRef} id='proprietaire' required>
              <option value={true}>Oui</option>
              <option value={false}>Non</option>
            </select>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Description</label>
            <textarea name="description"  className='formInput areatext' placeholder='modèle, couleur, adresse MAC...' ref={descriptionFieldRef} id='description' required/>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Disponibilité</label>
            <select name="choice" className='formInput' ref={disponibiliteFieldRef} id='available' required>
              <option value={true}>Oui</option>
              <option value={false}>Non</option>
            </select>
          </div>
        </div>
        <div className='newMateriel_form_rgroup'>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Date d'acquisition</label>
            <input type='date' className='formInput' ref={dateAcquisitionFieldRef} id='dateAcq' required/>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Date de mise en service</label>
            <input type='date' className='formInput' ref={dateMiseEnServiceFieldRef} id='dateMiseServ'/>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Marque</label>
            <select name="choice" className='formInput' ref={marqueFieldRef} id='marque' required>
              {marques.map((marque, index) => (
                <option key={index} value={marque._id}>{marque.nomMarque}</option>
                ))}
            </select>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Etat</label>
            <input type='text' className='formInput' ref={etatFieldRef} id='etat' required/>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Réformé</label>
            <select name="choice" className='formInput' ref={reformeFieldRef} id='reforme' required>
              <option value={true}>Oui</option>
              <option value={false}>Non</option>
            </select>
          </div>
        </div>
      </div>
      <div className='newMateriel_form_btn'>
        <Button title={'Enregister'} type='submit' value={'submit'}/>
        <Button title={'Annuler'}/>
      </div>
    </form>
  )
}
