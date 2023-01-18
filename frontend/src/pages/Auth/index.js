import React from 'react'
import './styles.scss'

export default function Authentification() {
  return (
    <div className="authentification">
        <div className='authentification_container'>
            <h1>INStaDParc</h1>
            <div className='authentification_container_form'>
                <h2 className='authentification_title'>Authentification</h2>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email" />
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" placeholder="Mot de passe" />
                    <button>Se Connecter</button>
                </form>
            </div>
        </div>
    </div>
  )
}
