import React from 'react'
import './styles.scss'
import under_building from '../../assets/under_construction.png'

export default function UnderConstruction() {
  return (
    <div className='under-construction'>
        <h1 className='under-construction_title'>Bientôt disponible</h1>
        <img src={under_building} alt='bientot dispo' className='under-construction_img'/>
    </div>
  )
}
