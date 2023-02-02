import React, { useState } from 'react'
import "./sidebar.scss";
import { BiChevronLeft } from 'react-icons/bi'
import sidebarLogo from '../../assets/Logo_Instad_site-removebg.png'
import { IoHome } from 'react-icons/io5'
import {MdComputer, MdNotifications} from 'react-icons/md'
import {BsTools} from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'

export default function Sidebar() {

  const [open, setOpen] = useState(true);
  // console.log(open)
  return (
    <div className={open ? 'sidebar': 'sidebar_reduce'}>
      <div className='sidebar_header'>
        <img src={sidebarLogo} alt='logo' className='sidebar_logo'/>
        <BiChevronLeft className={'sidebar_develop'} size={'10px'} onClick={()=> setOpen(!open)}/>
      </div>
      <div className='sidebar_body'>
        <ul className='sidebar_list'>
          <li className='sidebar_list_item'>
            <IoHome />
            <span>Accueil</span>
          </li>
          <li className='sidebar_list_item'>
            <MdNotifications />
            <span>Notifications</span>
          </li>
          <li className='sidebar_list_item'>
            <MdComputer />
            <span>Matériels</span>
          </li>
          <li className='sidebar_list_item'>
            <BsTools />
            <span>Interventions</span>
          </li>
          <li className='sidebar_list_item'>
            <FaUsers />
            <span>Utilisateurs</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
