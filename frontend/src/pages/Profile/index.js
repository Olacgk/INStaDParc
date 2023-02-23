import React from 'react'
import './styles.scss'
import Button from '../../components/button'
import Avatar from '@mui/material/Avatar';

export default function Profile() {

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
  return (
    <div className='profile_container'>
        <div className='edit_profile'>
            <form>
                <h3>Edit your information</h3>
                <div className='edit_profile_container'>
                    <div className='edit_profile_part'>
                        <div className='newUser_form_container'>
                            <label htmlFor='name'>Nom</label>
                            <input type='text' className='formInput' placeholder=''/>
                        </div>
                        <div className='newUser_form_container'>
                            <label htmlFor='name'>Email</label>
                            <input type='email' className='formInput' placeholder=''/>
                        </div>
                        <div className='newUser_form_container'>
                            <label htmlFor='name'>Service</label>
                            <select name="choice" className='formInput'>
                            <option value="oui"></option>
                            </select>
                        </div>
                        <div className='newUser_form_container'>
                            <label htmlFor='name'>Fonction</label>
                            <input type='text' className='formInput' placeholder=''/>
                        </div>
                    </div>
                    <div className='edit_profile_part'>
                        <div className='newUser_form_container'>
                            <label htmlFor='name'>Prénom</label>
                            <input type='text' className='formInput' placeholder=''/>
                        </div>
                        <div className='newUser_form_container'>
                            <label htmlFor='name'>Direction</label>
                            <select name="choice" className='formInput'>
                            <option value="oui"></option>
                            </select>
                        </div>
                        <div className='newUser_form_container'>
                            <label htmlFor='name'>Mot de passe</label>
                            <input type='password' className='formInput' placeholder=''/>
                        </div>
                    </div>
                </div>
                <div className='form_button'>
                    <Button title={'Enregistrer'}/>
                </div>
            </form>
        </div>
        <div className='view_profile'>
            <div className='avatar'>
                <Avatar {...stringAvatar('John Doe')} />
            </div>
            <div className='profile_info'>
                <h2 className='profile_title'>John DOE</h2>
                <span className='profile_fonction'>Directeur des Systèmes d'Information et des Bases de Données</span>
                <p>johndoe@instad.com</p>

            </div>
            <div className='log_out'>
                <Button title={'Déconnecter'} />
            </div>
        </div>
    </div>
  )
}
