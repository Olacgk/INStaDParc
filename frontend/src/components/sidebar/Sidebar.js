import React, {useState, useEffect} from 'react'
import './sidebar.scss'
import { sidebar_admin, sidebar_technicien, sidebar_user } from '../../constants/sidebar-menu'
import { useLocation } from 'react-router-dom';
import SideBarItem from './sidebar-item';

export default function Sidebar() {

  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [])
  const role = user?.userRole
  const location = useLocation();

  const [active, setActive] = useState(1);

  useEffect(() => {
    switch (role) {
      case 'admin':
        sidebar_admin.forEach(element => {
          if (location.pathname === element.path) {
            setActive(element.id);
          }
      });
        break;
      case 'technicien':
        sidebar_technicien.forEach(element => {
          if (location.pathname === element.path) {
            setActive(element.id);
          }
        });
        break;
      case 'user':
        sidebar_user.forEach(element => {
          if (location.pathname === element.path) {
            setActive(element.id);
          }
        });
        break;
      default:
        break;
    }
      
  }, [location.pathname])

  const __navigate = (id) => {
      setActive(id);
  }

  switch (role) {
    case 'admin':
      return (
        // <div className="sidebarComponent">
        //   <div className="wrapper">
        //     <div className='menu'>
        //     <h3>Dashboard</h3>
        //       <ul>
        //         <Link to={'/'} className='link'>
        //           <li>
        //             <MdHome className='icon'/>
        //             Accueil
        //           </li>
        //         </Link>
        //         <Link to={'/materials'} className='link'>
        //           <li>
        //             <MdListAlt className='icon' />
        //             liste des matériels
        //           </li>
        //         </Link>
        //         <Link to={'/interventions'} className='link'>
        //           <li>
        //             <FaTools className='icon' />
        //             liste des interventions
        //           </li>
        //         </Link>
        //         <Link to={'/liste-utilisateurs'} className='link'>
        //           <li>
        //             <FaUsers className='icon' />
        //             liste des utilisateurs
        //           </li>
        //         </Link>
        //         <Link to={'/liste-demandes'} className='link'>
        //           <li>
        //             <BsFileCheckFill className='icon' />
        //             liste des demandes
        //           </li>
        //         </Link>
        //         <li>
        //           <HiDocumentText className='icon' />
        //           Rapports
        //         </li>
        //         <li>
        //           <MdAccountCircle className='icon' />
        //           Profile
        //         </li>
        //       </ul>
        //     </div>
        //   </div>
        // </div>

        <div className="sidebarComponent">
          <div className="wrapper">
            <div className='menu'>
              {sidebar_admin.map((item, index) => (
                <div key={index} onClick={() => __navigate(item.id)}>
                  <SideBarItem item={item} active={item.id === active}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case 'user':
      return (
        <div className="sidebarComponent">
          <div className="wrapper">
            <div className='menu'>
              {sidebar_user.map((item, index) => (
                <div key={index} onClick={() => __navigate(item.id)}>
                  <SideBarItem item={item} active={item.id === active}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'technicien':
      return (
        <div className="sidebarComponent">
          <div className="wrapper">
            <div className='menu'>
              {sidebar_technicien.map((item, index) => (
                <div key={index} onClick={() => __navigate(item.id)}>
                  <SideBarItem item={item} active={item.id === active}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    default:
      break;
  }
  
}