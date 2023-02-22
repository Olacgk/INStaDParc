import React from 'react'
import './styles.scss'

export default function Cards({data_count, title, icon}) {
  return (
    <div className='card_container'>
        <div className='card_image'>
            <div className='card_data'>
                {icon}
            </div>
            <span className='card_data'>{data_count}</span>
        </div>
        <span className='card_title'>{title}</span>
    </div>
  )
}
