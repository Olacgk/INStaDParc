import React from 'react'
import './styles.scss'
import Topbar from '../../components/topbar/topbar'
import Sidebar from '../../components/sidebar/sidebar'
import Button from '../../components/button'

export default function ListDemand() {
  return (
    <div className='list_demand'>
      <Topbar />
      <div className='containerApp'>
        <Sidebar />
        <div className='containerApp_right'>
          <div className='heading'>
            <h2>Liste des demandes</h2>
            <Button title={"Ajouter"}/>
          </div>
        </div>
      </div>
    </div>
  )
}
