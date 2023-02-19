import React, { useState } from 'react'
import './styles.scss'
import logo from '../../assets/logo_instad.png'
import { useNavigate } from "react-router-dom";


export default function Authentification() { 
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    fetch("http://localhost:8080/api/auth/login", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({"email": email, "password": password})
  }).then((res) => res.json())
  .then((data) => {
      if (data.status === 200) {
        localStorage.setItem('user', data);
        navigate('/');
      } else {
        setErrorMessage(data);
        console.log(errorMessage)
      }
  })
  .catch((err) => console.log(err))
  }

  return (
    <div className="authentification">
      <div className='authentification_rightpart'>
        <img src={logo} alt='logo Instad'/>
      </div>
      <div className='authentification_leftpart_form'>
          <form onSubmit={handleSubmit}>
            <h2 className='authentification_title'>AUTHENTIFICATION</h2>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="email" id='email'/>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" placeholder="Mot de passe" id='password' />
            <div className='authentication_button'>
              <button type='submit' value={'submit'}>Se Connecter</button>
            </div>              
          </form>
      </div>
    </div>
  )
}
