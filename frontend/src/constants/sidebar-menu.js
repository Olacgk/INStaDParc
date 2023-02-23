import { MdHome, MdListAlt, MdAccountCircle } from 'react-icons/md'
import {FaTools, FaUsers} from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import { BsFileCheckFill } from 'react-icons/bs'

const sidebar_admin = [
    {
        id: 1,
        title: 'Accueil',
        path: '/',
        icon: <MdHome className='icon'/>
    },
    {
        id: 2,
        title: 'Liste des matériels',
        path: '/materials',
        icon: <MdListAlt className='icon' />
    },
    {
        id: 3,
        title: 'Liste des interventions',
        path: '/under-construction',
        icon: <FaTools className='icon' />
    },
    {
        id: 4,
        title: 'Liste des utilisateurs',
        path: '/liste-utilisateurs',
        icon: <FaUsers className='icon' />
    },
    {
        id: 5,
        title: 'Liste des demandes',
        path: '/liste-demandes',
        icon: <BsFileCheckFill className='icon' />
    },
    {
        id: 6,
        title: 'Rapports',
        path: '/under-construction',
        icon: <HiDocumentText className='icon' />
    },
    {
        id: 7,
        title: 'Profil',
        path: '/profil',
        icon: <MdAccountCircle className='icon' />
    }
]

const sidebar_technicien = [
    {
        id: 1,
        title: 'Accueil',
        path: '/',
        icon: <MdHome className='icon'/>
    },
    {
        id: 2,
        title: 'Liste des matériels',
        path: '/materials',
        icon: <MdListAlt className='icon' />
    },
    {
        id: 3,
        title: 'Liste des interventions',
        path: '/interventions',
        icon: <FaTools className='icon' />
    },
    {
        id: 5,
        title: 'Liste des demandes',
        path: '/liste-demandes',
        icon: <BsFileCheckFill className='icon' />
    },
    {
        id: 6,
        title: 'Rapports',
        path: '/under-construction',
        icon: <HiDocumentText className='icon' />
    },
    {
        id: 7,
        title: 'Profil',
        path: '/profil',
        icon: <MdAccountCircle className='icon' />
    }
]

const sidebar_user = [
    {
        id: 1,
        title: 'Accueil',
        path: '/',
        icon: <MdHome className='icon'/>
    },
    {
        id: 2,
        title: 'Demande de matériel',
        path: '/demande-materiel',
        icon: <MdListAlt className='icon' />
    },
    {
        id: 3,
        title: 'Demande d\'intervention',
        path: '/demande-intervention',
        icon: <FaTools className='icon' />
    },
    {
        id: 4,
        title: 'Profil',
        path: '/profil',
        icon: <MdAccountCircle className='icon' />
    }
]


export {sidebar_admin, sidebar_technicien, sidebar_user};