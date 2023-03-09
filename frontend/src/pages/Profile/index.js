import React, {useEffect, useState, useRef} from 'react'
import './styles.scss'
import Button from '../../components/button'
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function Profile() {

    const [user, setUser] = useState({});
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [])

  
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [severity, setSeverity] = useState('');
  const [alertTitle, setAlertTitle] = useState('');


    function stringAvatar(name) {
        return {
          sx: {
            bgcolor: '#294864',
            color: 'white',
            fontWeight: 'semibold',
            fontSize: '3rem',
            width: 100,
            height: 100,
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }
      
  const directionFieldRef = useRef();
  const serviceFieldRef = useRef();
  const nameFieldRef = useRef();
  const prenomFieldRef = useRef();
  const emailFieldRef = useRef();
  const passwordFieldRef = useRef();

  const [ directions, setDirections ] = useState([]);
  const [ services, setServices ] = useState([]);

  useEffect(() => {
    fetch("/api/direction/get-directions")
    .then(res => res.json())
    .then(data => {
      setDirections(data)
    })
    .catch(err => console.error(err))
  }, [])

  const id = directionFieldRef?.current?.value
  useEffect(() => {
    fetch(`http://localhost:8080/api/service/serviceByDir/${id}`)
    .then(res => res.json())
    .then(data => {
      setServices(data)
    })
    .catch(err => console.error(err))
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/user/update-user/${user.userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nom: nameFieldRef?.current?.value,
            prenom: prenomFieldRef?.current?.value,
            email: emailFieldRef?.current?.value,
            direction: directionFieldRef?.current?.value,
            service: serviceFieldRef?.current?.value,
            password: passwordFieldRef?.current?.value,
        })
    }).then(res => res.json())
    .then(data => {
        if(data.message) {
            setAlertMessage(data.message)
            setSeverity('success')
            setAlertTitle('Succès')
            setShowAlert(true)
            // setUser(data.user)
            console.log(data.user)
        } else {
            setAlertMessage(data.error)
            setSeverity('error')
            setAlertTitle('Erreur')
            setShowAlert(true)
        }
    })
  }

  function handleLogout() {
    // Effacer les informations d'authentification du navigateur de l'utilisateur
    localStorage.removeItem('user');
    // Rediriger l'utilisateur vers la page de connexion ou la page d'accueil
    window.location.href = '/login';
  }
  return (
    <div>
        {showAlert && <Alert severity={severity} onClose={() => setShowAlert(false)}>
        <AlertTitle>{alertTitle}</AlertTitle>
        {alertMessage}
      </Alert>}
        <div className='profile_container'>
            <div className='edit_profile'>
                <form onSubmit={handleSubmit}>
                    <h3>Edit your information</h3>
                    <div className='edit_profile_container'>
                        <div className='edit_profile_part'>
                            <div className='newUser_form_container'>
                                <label htmlFor='name'>Nom</label>
                                <input type='text' className='formInput' placeholder='' ref={nameFieldRef}/>
                            </div>
                            <div className='newUser_form_container'>
                                <label htmlFor='name'>Email</label>
                                <input type='email' className='formInput' placeholder='' ref={emailFieldRef}/>
                            </div>
                            <div className='newUser_form_container'>
                                <label htmlFor='name'>Service</label>
                                <select name="choice" className='formInput' ref={serviceFieldRef}>
                                {services.map((service, index) => (
                                    <option key={index} value={service._id}>{service.nomService}</option>
                                ))}
                                </select>
                            </div>
                        </div>
                        <div className='edit_profile_part'>
                            <div className='newUser_form_container'>
                                <label htmlFor='name'>Prénom</label>
                                <input type='text' className='formInput' placeholder='' ref={prenomFieldRef}/>
                            </div>
                            <div className='newUser_form_container'>
                                <label htmlFor='name'>Direction</label>
                                <select name="choice" className='formInput' ref={directionFieldRef}>
                                {directions.map((direction, index) => (
                                    <option key={index} value={direction._id}>{direction.abbrv}</option>
                                ))}
                                </select>
                            </div>
                            <div className='newUser_form_container'>
                                <label htmlFor='name'>Mot de passe</label>
                                <input type='password' className='formInput' placeholder='' ref={passwordFieldRef}/>
                            </div>
                        </div>
                    </div>
                    <div className='form_button'>
                        <Button title={'Enregistrer'} type={'submit'} value={'submit'}/>
                    </div>
                </form>
            </div>
            <div className='view_profile'>
                <div className='avatar'>
                    <Avatar {...stringAvatar(`${user.userPrenom} ${user.userName}`)} />
                </div>
                <div className='profile_info'>
                    <h2 className='profile_title'>{user.userPrenom} {user.userName}</h2>
                    <span className='profile_fonction'>{user.userService}</span>
                    <p>{user.userEmail}</p>

                </div>
                <div className='log_out'>
                    <Button title={'Déconnecter'} clicked={handleLogout}/>
                </div>
            </div>
        </div>
    </div>
  )
}
