import React from "react";
import { Link } from 'react-router-dom';

import './sidebar.scss';

const SideBarItem = ({ item, active }) => {
    return (
        <Link to={item.path} className={active ? 'sidebar_item_active' : 'sidebar_item'}>
            <li>
                {item.icon}
                <span className='sidebar-item-label'>{item.title}</span>
            </li>
        </Link>
    )
}
export default SideBarItem;
