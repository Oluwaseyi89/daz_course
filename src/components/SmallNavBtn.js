import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import '../styles/smallnavbtn.css';
import { AppContext } from '../App';

function SmallNavBtn ({item, navBtnClick}) {

    const {id, route, iconUrl, isActive, title} = item;
    const {showMenu, setShowMenu} = useContext(AppContext);

    const navigate = useNavigate();

    function handleNavBtnClick () {
        navBtnClick(id);
        navigate(route);
        setShowMenu(false);

    }

    return (
        <div className={isActive ? 'small-menu-btn-active' : 'smallnavbtn'} onClick={() => handleNavBtnClick()}>
            <div className='small-menu-btn-icon'>
                <img alt='small-menu-btn-icon' src={isActive ? iconUrl[2] : iconUrl[0]}/>
            </div>
            <div className='small-menu-btn-title'>{title}</div>
        </div>
    );

};

export default SmallNavBtn