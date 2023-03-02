import React from 'react'
import './styles.scss'
import Button from '../../components/button'

export default function DemandeMat() {
  return (
    <form className='newMateriel_form'>
      <h2 className='newMateriel_title'>Demande de matériel</h2>
      <div className='newMateriel_form_mainContainer'>
        <div className='newMateriel_form_lgroup'>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Type</label>
            <input type='text' className='formInput' placeholder=''/>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Quantité</label>
            <input type='number' className='formInput'/>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Projet</label>
            <input type='text' className='formInput'/>
          </div>
        </div>
        <div className='newMateriel_form_rgroup'>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Date de l'emprunt</label>
            <input type='date' className='formInput' />
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Date de retour</label>
            <input type='date' className='formInput' />
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Opération</label>
            <input type='text' className='formInput'/>
          </div>
        </div>
      </div>
      <div className='newMateriel_form_btn'>
        <Button title={'Enregister'}/>
        <Button title={'Annuler'}/>
      </div>
    </form>
  )
}
