import React, {useState, useEffect, useRef} from 'react'
import './styles.scss'
import Button from '../../components/button'

export default function DemandeMat() {

  const typeFieldRef = useRef();

  const [types, setTypes] = useState([]);
  // const [marques, setMarques] = useState([]);

  useEffect(() => {
    fetch('/api/type/get-types')
      .then(res => res.json())
      .then(data => {
        setTypes(data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <form className='newMateriel_form'>
      <h2 className='newMateriel_title'>Demande de matériel</h2>
      <div className='newMateriel_form_mainContainer'>
        <div className='newMateriel_form_lgroup'>
          <div className='newMateriel_form_container'>
          <label htmlFor='name'>Type</label>
          <select name="choice" className='formInput' ref={typeFieldRef} id='type' required>
            {types.map((type, index) => (
              <option key={index} value={type._id}>{type.nomType}</option>
            ))}
          </select>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Quantité</label>
            <input type='number' min={1} className='formInput'/>
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Projet</label>
            <input type='text' className='formInput'/>
          </div>
        </div>
        <div className='newMateriel_form_rgroup'>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Date de l'emprunt</label>
            <input type='date' className='formInput' />
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Date de retour</label>
            <input type='date' className='formInput' />
          </div>
          <div className='newMateriel_form_container'>
            <label htmlFor='name'>Opération</label>
            <input type='text' className='formInput'/>
          </div>
        </div>
      </div>
      <div className='newMateriel_form_btn'>
        <Button title={'Enregister'}/>
        <Button title={'Annuler'}/>
      </div>
    </form>
  )
}
