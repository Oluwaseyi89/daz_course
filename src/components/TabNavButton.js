import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/tabnavbutton.css';
import { AppContext } from '../App';

function TabNavButton ({item}) {

    const {navBtnClick} = useContext(AppContext);

    const {isActive, title, id, route} = item;

    const navigate = useNavigate();

    function handleNavBtnClick () {
        navBtnClick(id);
        navigate(route);
    }


    return (
        <div className={isActive ? 'tabnavbutton-active' : 'tabnavbutton'} onClick={handleNavBtnClick}> {title}</div>
    );

};

export default TabNavButton