import './topbar.scss'
import logo from '../../assets/logo_instad.png'
import  { MdNotifications, MdLogout } from 'react-icons/md'

const Topbar = () => {

  function handleLogout() {
    // Effacer les informations d'authentification du navigateur de l'utilisateur
    localStorage.removeItem('user');
    // Rediriger l'utilisateur vers la page de connexion ou la page d'accueil
    window.location.href = '/login';
  }
  
  return (
    <div className='topbarComponent'>
      <div className="wrapper">
        <div className="left">
          <img src={logo} alt='logo'/>
        </div>
        <div className="right">
          <div className="icon">
            <MdNotifications />
            {/* <span>2</span> */}
          </div>
          {/* <div className="icon">
            <MdLanguage />
            <span>2</span>
          </div> */}
          <div className="icon">
            <MdLogout  onClick={handleLogout}/>
          </div>
          {/* <img src="https://i.ibb.co/xG2ygZT/btter.jpg" alt="adminPic" /> */}
        </div>
        
      </div>
    </div>
  )
}

export default Topbar