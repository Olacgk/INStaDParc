import { MdVisibility } from 'react-icons/md'
import './widgetSm.scss'

const WidgetSm = () => {
  return (
    <div className='widgetSmComponent'>
      <span className='title'>Liste des techniciens</span>
      <ul>
        <li>
          <img src="https://pbs.twimg.com/profile_images/1200783415290793984/FrhNjsDK_400x400.jpg" alt="" />
          <div>
            <span className='username'>Luisa Campos</span>
            <span className='userTitle'>Developer</span>
          </div>
          <button>
            <MdVisibility className='icon' />
            Display
          </button>
        </li>
        <li>
          <img src="https://pbs.twimg.com/profile_images/1200783415290793984/FrhNjsDK_400x400.jpg" alt="" />
          <div>
            <span className='username'>Luisa Campos</span>
            <span className='userTitle'>Developer</span>
          </div>
          <button>
            <MdVisibility className='icon' />
            Display
          </button>
        </li>
        <li>
          <img src="https://pbs.twimg.com/profile_images/1200783415290793984/FrhNjsDK_400x400.jpg" alt="" />
          <div>
            <span className='username'>Luisa Campos</span>
            <span className='userTitle'>Developer</span>
          </div>
          <button>
            <MdVisibility className='icon' />
            Display
          </button>
        </li>
        <li>
          <img src="https://pbs.twimg.com/profile_images/1200783415290793984/FrhNjsDK_400x400.jpg" alt="" />
          <div>
            <span className='username'>Luisa Campos</span>
            <span className='userTitle'>Developer</span>
          </div>
          <button>
            <MdVisibility className='icon' />
            Display
          </button>
        </li>
        <li>
          <img src="https://pbs.twimg.com/profile_images/1200783415290793984/FrhNjsDK_400x400.jpg" alt="" />
          <div>
            <span className='username'>Luisa Campos</span>
            <span className='userTitle'>Developer</span>
          </div>
          <button>
            <MdVisibility className='icon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm