import React from 'react'
import './styles.scss'
import Cards from '../../components/cards'
import { FaUsers, FaTools } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import { MdComputer } from 'react-icons/md'
import WidgetSm from '../../components/widgetSm/widgetSm'
import WidgetLg from '../../components/widgetLg/widgetLg'

export default function Home() {
  return (
    
    <div className="widgets">
      <div className='home_stat'>
        <Cards icon={<FaUsers color='blue' />} data_count={700} title={'Nombre d\'utilisateur'}/>
        <Cards icon={<MdComputer color='yellow'/>} data_count={2400} title={'Nombre d\'équipements'}/>
        <Cards icon={<HiDocumentText color='red'/>} data_count={0} title={'Rapport'}/>
        <Cards icon={<FaTools color='#294864'/>} data_count={0} title={'Nombre d\'interventions'}/>
      </div>
      <div className='home_recap'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
