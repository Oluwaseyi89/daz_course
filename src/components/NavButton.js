import React from 'react';

import { useNavigate } from 'react-router-dom';

import '../styles/navbutton.css';

function NavButton ({ item, navBtnClick }) {

    const {id, route, iconUrl, isActive, title} = item;

    const navigate = useNavigate();

    function handleNavBtnClick () {
        navBtnClick(id);
        navigate(route);


    }

    return (
        <div className={isActive ? 'btn-active' : 'navbutton'} onClick={() => handleNavBtnClick()}>
            <div className='btn-icon'>
                <img alt='btn-icon' src={isActive ? iconUrl[0] : iconUrl[1]}/>
            </div>
            <div className='btn-title'>{title}</div>
        </div>
    );

};

export default NavButton