import React from 'react'
import './styles.scss'
import Topbar from '../topbar/topbar'
import Sidebar from '../sidebar/sidebar'


export default function Dashboard({children}) {
  return (
    <div className={'dashboard'}>
      <Topbar />
      <div className='containerApp'>
        <Sidebar />
        <div className='containerApp_right'>
          {children}
        </div>
      </div>
    </div>
  )
}
