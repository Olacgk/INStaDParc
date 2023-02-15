import React from 'react'
import './styles.scss'
import Dashboard from '../../components/Dashboard'
import Button from '../../components/button'

export default function NewUser() {
  return (
    <Dashboard>
      <form className='newUser_form'>
        <h2 className='newUser_title'>Ajouter un nouvel utilisateur</h2>
        <div className='newUser_form_mainContainer'>
          <div className='newUser_form_lgroup'>
            <div className='newUser_form_container'>
              <label htmlFor='name'>Nom</label>
              <input type='text' className='formInput' placeholder='INSTAD/INSTAD/ORD/20/010'/>
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
              <input type='date' className='formInput' />
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

    </Dashboard>
  )
}
