import React, {useState} from 'react';

import { useNavigate } from 'react-router-dom';

import '../styles/navbutton.css';

function NavButton ({ item, navBtnClick }) {

    const {id, route, iconUrl, isActive, title} = item;

    const [mouseEntered, setMouseEntered] = useState(false);

    const navigate = useNavigate();

    function handleNavBtnClick () {
        navBtnClick(id);
        navigate(route);


    }

    return (
        <div onMouseEnter={() => setMouseEntered(true)} onMouseLeave={() => setMouseEntered(false)} className={isActive ? 'btn-active' : 'navbutton'} onClick={() => handleNavBtnClick()}>
            <div className='btn-icon'>
                {
                    (mouseEntered && !isActive)
                        ?     
                        <img alt='btn-icon' src={isActive ? iconUrl[1] : iconUrl[0]}/>

                :
                <img alt='btn-icon' src={isActive ? iconUrl[0] : iconUrl[1]}/>
                }
            </div>
            <div className='btn-title' style={{fontFamily: "Mulish Bold"}}>{title}</div>
        </div>
    );

};

export default NavButton