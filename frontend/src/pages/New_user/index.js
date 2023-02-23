import React from 'react'
import './styles.scss'
import Button from '../../components/button'

export default function NewUser({isUpdate=false}) {
  return (
    <form className='newUser_form'>
      {!isUpdate? <h2 className='newUser_title'>Ajouter un nouvel utilisateur</h2> : <h2 className='newUser_title'>Modifier un utilisateur</h2>  }
      <div className='newUser_form_mainContainer'>
        <div className='newUser_form_lgroup'>
          <div className='newUser_form_container'>
            <label htmlFor='name'>Nom</label>
            <input type='text' className='formInput' />
          </div>
          <div className='newUser_form_container'>
            <label htmlFor='name'>Prénom</label>
            <input type='text' className='formInput'/>
          </div>
          <div className='newUser_form_container'>
            <label htmlFor='name'>Email</label>
            <input type='text' className='formInput'/>
          </div>
        </div>
        <div className='newUser_form_rgroup'>
          <div className='newUser_form_container'>
            <label htmlFor='name'>Direction</label>
            <input type='text' className='formInput' />
          </div>
          <div className='newUser_form_container'>
            <label htmlFor='name'>Service</label>
            <input type='text' className='formInput'/>
          </div>
          <div className='newUser_form_container'>
            <label htmlFor='name'>Rôle</label>
            <select name="choice" className='formInput'>
              <option value="oui">Employé</option>
              <option value="non">Technicien</option>
              <option value="non">Administrateur</option>
            </select>
          </div>
        </div>
      </div>
      <div className='newUser_form_btn'>
        <Button title={'Enregister'}/>
        <Button title={'Annuler'}/>
      </div>
    </form>
  )
}
