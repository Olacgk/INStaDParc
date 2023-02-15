import React from 'react'
import './styles.scss'
import logo from '../../assets/logo_instad.png'

export default function Authentification() {
  return (
    <div className="authentification">
      <div className='authentification_rightpart'>
        <img src={logo} alt='logo Instad'/>
      </div>
      <div className='authentification_leftpart_form'>
          <form>
            <h2 className='authentification_title'>AUTHENTIFICATION</h2>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="email" />
            <label htmlFor="password">Mot de passe</label>
            <input type="password" placeholder="Mot de passe" />
            <div className='authentication_button'>
              <button>Se Connecter</button>
            </div>
              
          </form>
      </div>
    </div>
  )
}
