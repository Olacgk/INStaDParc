import React, { useRef, useState, useEffect } from 'react'
import './styles.scss'
import Button from '../../components/button'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import ModalComponent from '../../components/Modal';

export default function NewUser({isUpdate=false}) {

  const nameFieldRef = useRef();
  const prenomFieldRef = useRef();
  const emailFieldRef = useRef();
  const directionFieldRef = useRef();
  const serviceFieldRef = useRef();
  const roleFieldRef = useRef();

  const navigate = useNavigate();

  const createUser = (userData) => {
    fetch("http://localhost:8080/api/user/new-user", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    }).then((res)=> {
      if (!res.ok) {
        throw new Error("Une erreur s'est produite lors de l'ajout de l'utilisateur")
      }
      return res.json()
    })
      .then((data)=> {console.log('Utilisateur créé avec succès',data)
      setTimeout(() => {
        <ModalComponent openModal={true}/>
      }, 2000);
      navigate('/liste-utilisateurs')
    })
      .catch((err)=> console.log('Erreur lors de la création de l\'utilisateur',err))
  }

  const [ directions, setDirections ] = useState([]);
  const [ services, setServices ] = useState([]);

  useEffect(() => {
    fetch("/api/direction/get-directions")
    .then(res => res.json())
    .then(data => {
      setDirections(data)
    })
    .catch(err => console.error(err))
  }, [])

  const id = directionFieldRef?.current?.value
  useEffect(() => {
    fetch(`/api/service/serviceByDir/${id}`)
    .then(res => res.json())
    .then(data => {
      setServices(data)
    })
    .catch(err => console.error(err))
  })

  function retourPagePrecedente() {
    window.history.go(-1);
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: nameFieldRef?.current?.value,
      prenom: prenomFieldRef?.current?.value,
      email: emailFieldRef?.current?.value,
      direction: directionFieldRef?.current?.value,
      service: serviceFieldRef?.current?.value,
      role: roleFieldRef?.current?.value
    }
    createUser(userData)
  }
  return (
    <form className='newUser_form' onSubmit={handleSubmit}>
      <div className='newUser_form_backButton'>
        <Button title={<BiArrowBack/>} onClick={retourPagePrecedente}/>
      </div>
      {!isUpdate? <h2 className='newUser_title'>Ajouter un nouvel utilisateur</h2> : <h2 className='newUser_title'>Modifier un utilisateur</h2>  }
      <div className='newUser_form_mainContainer'>
        <div className='newUser_form_lgroup'>
          <div className='newUser_form_container'>
            <label htmlFor='name'>Nom</label>
            <input type='text' className='formInput' ref={nameFieldRef} id='name' required/>
          </div>
          <div className='newUser_form_container'>
            <label htmlFor='name'>Prénom</label>
            <input type='text' className='formInput' ref={prenomFieldRef} id='prenom' required/>
          </div>
          <div className='newUser_form_container'>
            <label htmlFor='name'>Email</label>
            <input type='email' className='formInput' ref={emailFieldRef} id='email' required/>
          </div>
        </div>
        <div className='newUser_form_rgroup'>
          <div className='newUser_form_container'>
            <label htmlFor='name'>Direction</label>
            {/* <input type='text' className='formInput' ref={directionFieldRef} id='direction' required/> */}
            <select className='formInput' name='choice' ref={directionFieldRef} id='direction' required>
              {directions.map((direction, index) => (
                <option key={index} value={direction._id}>{direction.abbrv}</option>
              ))}
            </select>
          </div>
          <div className='newUser_form_container'>
            <label htmlFor='name'>Service</label>
            {/* <input type='text' className='formInput' ref={serviceFieldRef} id='service' required/> */}
            <select className='formInput' name='choice' ref={serviceFieldRef} id='service' required>
              {services.map((service, index) => (
                <option key={index} value={service._id}>{service.nomService}</option>
              ))}
            </select>
          </div>
          <div className='newUser_form_container'>
            <label htmlFor='name'>Rôle</label>
            <select name="choice" className='formInput' ref={roleFieldRef} id='role' required>
              <option value="employe">Employé</option>
              <option value="technicien">Technicien</option>
              <option value="administrateur">Administrateur</option>
            </select>
          </div>
        </div>
      </div>
      <div className='newUser_form_btn'>
        <Button title={'Enregister'} type='submit' value={'submit'}/>
        <Button title={'Annuler'}/>
      </div>
    </form>
  )
}
