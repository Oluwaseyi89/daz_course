import React, {useContext} from 'react';

import '../styles/asidenav.css';
import { AppContext } from '../App';

function AsideNav ({navBtnClick}) {

    const appState = useContext(AppContext);

    

    return (
        <div className='asidenav'>
            <div className='nav-btn-container'>
                {appState.navState.map((item) => {
                    return <button key={item.id} onClick={() => navBtnClick(item.id)}>{item.title}</button>
                })}
            </div>
        </div>
    );

};

export default AsideNav