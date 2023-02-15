import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

export default function Button({title, clicked, hasLink= false, link}) {
  return (hasLink ?
    <Link to={link}>
      <button className='btn' >{title}</button>
    </Link>
    :
    <button className='btn' onClick={clicked}>{title}</button>
  )
}
