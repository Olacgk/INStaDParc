import React from 'react'
import './styles.scss'
import Button from '../../components/button'

export default function ListDemande() {
  return (
    <div className='heading'>
      <h2>Liste des demandes</h2>
      <Button title={"Ajouter"}/>
    </div>
  )
}
