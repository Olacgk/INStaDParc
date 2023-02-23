import React from 'react'
import './styles.scss'
import Button from '../../components/button'

export default function NewMaterial() {
  return (
    <form className='newMateriel_form'>
      <h2 className='newMateriel_title'>Ajouter un nouveau matériel</h2>
      <div className='newMateriel_form_mainContainer'>
        <div className='newMateriel_form_lgroup'>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Numéro d'immatriculation</label>
            <input type='text' className='formInput' placeholder='INSTAD/INSTAD/ORD/20/010'/>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Type</label>
            <input type='text' className='formInput'/>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Projet</label>
            <input type='text' className='formInput'/>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Propriétaire</label>
            <select name="choice" className='formInput'>
              <option value="oui">Oui</option>
              <option value="non">Non</option>
            </select>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Description</label>
            <textarea name="description"  className='formInput areatext' placeholder='modèle, couleur, adresse MAC...'/>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Disponibilité</label>
            <select name="choice" className='formInput'>
              <option value="oui">Oui</option>
              <option value="non">Non</option>
            </select>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Réformé</label>
            <select name="choice" className='formInput'>
              <option value="oui">Oui</option>
              <option value="non">Non</option>
            </select>
          </div>
        </div>
        <div className='newMateriel_form_rgroup'>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Date d'acquisition</label>
            <input type='date' className='formInput' />
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Date de mise en service</label>
            <input type='date' className='formInput' />
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Date de réforme</label>
            <input type='date' className='formInput'/>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Marque</label>
            <input type='text' className='formInput'/>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Utilisateur</label>
            <input type='text' className='formInput'/>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Etat</label>
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
