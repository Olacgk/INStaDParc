import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/topbar'
export default function Layout({children}) {
    return (
        <div className={'dashboard'}>
            <Topbar />
            <div className='containerApp'>
                <Sidebar />
                <div className='containerApp_right'>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
