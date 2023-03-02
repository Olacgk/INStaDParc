import React from 'react'
import './styles.scss'
import Cards from '../../components/cards'
import { FaUsers, FaTools } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import { MdComputer } from 'react-icons/md'
import WidgetSm from '../../components/widgetSm/widgetSm'
import WidgetLg from '../../components/widgetLg/widgetLg'
import { home_admin_content, home_user_content } from '../../data'

const AdminDashboard = () => (
  <div className="widgets">
    <div className='home_stat'>
      <Cards icon={<FaUsers color='blue' />} data_count={700} title={'Nombre d\'utilisateur'} />
      <Cards icon={<MdComputer color='yellow' />} data_count={2400} title={'Nombre d\'équipements'} />
      <Cards icon={<HiDocumentText color='red' />} data_count={0} title={'Rapport'} />
      <Cards icon={<FaTools color='#294864' />} data_count={0} title={'Nombre d\'interventions'} />
    </div>
    <div className='home_recap'>
      <WidgetSm title={'Liste des techniciens'} data={home_admin_content} />
      <WidgetLg title={'Dernières demandes'} />
    </div>
  </div>
)
const UserDashboard = () => (
  <div className="widgets">
    <div className='home_stat'>
      <WidgetSm title={'5 dernières demandes de matériel'} data={home_user_content} />
      <WidgetSm title={'5 dernières demandes d\'intervention'} data={home_user_content} />
    </div>

  </div>
)
const TechnicianDashboard = () => (
  <div className="widgets">
    <div className='home_stat'>
      <Cards icon={<HiDocumentText color='blue' />} data_count={10} title={'Nombre de demandes'} />
      <Cards icon={<MdComputer color='yellow' />} data_count={2400} title={'Nombre d\'équipements'} />
      <Cards icon={<HiDocumentText color='red' />} data_count={0} title={'Rapports'} />
      <Cards icon={<FaTools color='#294864' />} data_count={0} title={'Nombre d\'interventions'} />
    </div>
    <div className='home_recap'>
      {/* <WidgetSm /> */}
      <WidgetLg title={'Liste des demandes'} />
    </div>
  </div>
)

export default function Home({ role }) {
  role = 'admin'
  switch (role) {
    case 'admin':
      return <AdminDashboard />
    case 'user':
      return <UserDashboard />
    case 'technicien':
      return <TechnicianDashboard />
    default:
      break;
  }
}
