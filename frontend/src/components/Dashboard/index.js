import React, { useEffect, useState } from 'react'
import './styles.scss'
import Topbar from '../topbar/topbar'
import Sidebar from '../sidebar/sidebar'
import { Navigate } from "react-router-dom";



export default function Dashboard({children}) {

  const [authenticated, setauthenticated] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
    return <Navigate to="/login" />
  } else {
    return (
      <div className={'dashboard'}>
        <Topbar />
        <div className='containerApp'>
          <Sidebar />
          <div className='containerApp_right'>
            {children}
          </div>
        </div>
      </div>
    )
  }
  
}
