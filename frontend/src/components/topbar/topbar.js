import './topbar.scss'
import logo from '../../assets/logo_instad.png'
import  { MdNotifications, MdSettings} from 'react-icons/md'

const Topbar = () => {
  return (
    <div className='topbarComponent'>
      <div className="wrapper">
        <div className="left">
          <img src={logo} alt='logo'/>
        </div>
        <div className="right">
          <div className="icon">
            <MdNotifications />
            <span>2</span>
          </div>
          {/* <div className="icon">
            <MdLanguage />
            <span>2</span>
          </div> */}
          <div className="icon">
            <MdSettings />
          </div>
          {/* <img src="https://i.ibb.co/xG2ygZT/btter.jpg" alt="adminPic" /> */}
        </div>
        
      </div>
    </div>
  )
}

export default Topbar