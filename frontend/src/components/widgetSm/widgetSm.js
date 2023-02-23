import { MdVisibility } from 'react-icons/md'
import './widgetSm.scss'

const WidgetSm = ({title, data}) => {

  
  return (
    <div className='widgetSmComponent'>
      <span className='title'>{title}</span>
      <ul>
        {
          data.forEach(item => {
            <li>
              <img src={item.image} alt="" />
              <div>
                <span className='username'>{item.nom}</span>
                <span className='userTitle'>{item.desc}</span>
              </div>
              <button>
                <MdVisibility className='icon' />
                {item.textbutton}
              </button>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default WidgetSm