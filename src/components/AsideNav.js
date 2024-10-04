import React, {useContext} from 'react';

import '../styles/asidenav.css';
import { AppContext } from '../App';
import NavButton from './NavButton';

function AsideNav () {

    const {appState, navBtnClick}= useContext(AppContext);

    

    return (
        <div className='asidenav'>
            <div className='nav-btn-container'>
                {appState.navState.map((item) => {
                    return <NavButton key={item.id} item={item} navBtnClick={navBtnClick} />
                })}
            </div>
        </div>
    );

};

export default AsideNav