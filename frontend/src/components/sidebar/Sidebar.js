import React from 'react'
import './sidebar.scss'
import { MdHome, MdListAlt, MdAccountCircle } from 'react-icons/md'
import {FaTools, FaUsers} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { HiDocumentText } from 'react-icons/hi'
import { BsFileCheckFill } from 'react-icons/bs'

export default function Sidebar() {

  const role = 'admin';

  switch (role) {
    case 'admin':
      return (
        <div className="sidebarComponent">
          <div className="wrapper">
            <div className='menu'>
            <h3>Dashboard</h3>
              <ul>
                <Link to={'/dashboard'} className='link'>
                  <li>
                    <MdHome className='icon'/>
                    Accueil
                  </li>
                </Link>
                <Link to={'/materials'} className='link'>
                  <li>
                    <MdListAlt className='icon' />
                    liste des matériels
                  </li>
                </Link>
                <Link to={'/interventions'} className='link'>
                  <li>
                    <FaTools className='icon' />
                    liste des interventions
                  </li>
                </Link>
                <Link to={'/liste-utilisateurs'} className='link'>
                  <li>
                    <FaUsers className='icon' />
                    liste des utilisateurs
                  </li>
                </Link>
                <li>
                  <BsFileCheckFill className='icon' />
                  liste des demandes
                </li>
                <li>
                  <HiDocumentText className='icon' />
                  Rapports
                </li>
                <li>
                  <MdAccountCircle className='icon' />
                  Profile
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    case 'user':
      return (
        <div className="sidebarComponent">
          <div className="wrapper">
            <div className='menu'>
            <h3>Dashboard</h3>
              <ul>
                <Link to={'/dashboard'} className='link'>
                  <li>
                    <MdHome className='icon'/>
                    Accueil
                  </li>
                </Link>
                <Link to={'/materials'} className='link'>
                  <li>
                    <MdListAlt className='icon' />
                    Matériels
                  </li>
                </Link>
                <Link to={'/interventions'} className='link'>
                  <li>
                    <FaTools className='icon' />
                    Interventions
                  </li>
                </Link>
                <li>
                  <FaUsers className='icon' />
                  Profile
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    default:
      break;
  }
  
}