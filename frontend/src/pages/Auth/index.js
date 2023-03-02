import React, { useState, useRef, useContext, useEffect } from 'react'
import './styles.scss'
import logo from '../../assets/logo_instad.png'
import { useNavigate } from "react-router-dom";
import Auth from '../../context/Auth';


export default function Authentification() {
  
  const { user, setUser } = useContext(Auth);
  const navigate = useNavigate();
  const emailFieldRef = useRef();
  const passwordFieldRef = useRef();
  // const [success, setSuccess] = useState(false);
  useEffect(()=>{
    if(user) navigate('/');
  },[])

  const [errorMessage, setErrorMessage] = useState(undefined);
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/auth/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "email": emailFieldRef?.current?.value,
        "password": passwordFieldRef?.current?.value
      })
    }).then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          localStorage.setItem('user', JSON.stringify(data));
          setUser(data);
          navigate('/');
        } else {
          setErrorMessage(data?.error);
          console.log(data?.error)
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="authentification">
      <div className='authentification_rightpart'>
        <img src={logo} alt='logo Instad' />
      </div>
      <div className='authentification_leftpart_form'>
        <form onSubmit={handleSubmit}>
          <h2 className='authentification_title'>AUTHENTIFICATION</h2>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="email" id='email' ref={emailFieldRef} autoComplete="off" required />
          <label htmlFor="password">Mot de passe</label>
          <input type="password" placeholder="Mot de passe" id='password' ref={passwordFieldRef} required />
          <div className='authentication_button'>
            <button type='submit' value={'submit'} >Se Connecter</button>
          </div>
        </form>
      </div>
    </div>
  )
}
