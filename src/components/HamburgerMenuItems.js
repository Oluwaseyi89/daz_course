import React, {useContext} from 'react';

import '../styles/hamburgermenuitems.css';
import SmallNavBtn from './SmallNavBtn';
import { AppContext } from '../App';

function HamburgerMenuItems ({ handleHideMenu }) {

   

    const {appState, navBtnClick} = useContext(AppContext);

    return (
        <div className="hamburger-menu-items">
                            <div className="close-div">
                                <span className="nav-close-btn" onClick={handleHideMenu}>&times;</span>
                            </div>
                            <div className="menu-user-div">
                                <div className="user-pref-icon">
                                    <div className="pref-icon-img">
                                        <img alt="love-icon" src="../assets/images/inactive_sm_favorite.svg" />
                                    </div>
                                    <div className="pref-icon-title">Favorite</div>
                                </div>
                                <div className="user-pref-icon">
                                    <div className="pref-icon-img">
                                    <img alt="notification-icon" src="../assets/images/inactive_sm_notification_icon.svg" />
                                    </div>
                                    <div className="pref-icon-title">Notifications</div>
                                </div>
                                <div className="sm-logon-user">
                                    <div className="sm-user-icon">
                                    <img alt="user-avatar" src="../assets/images/user_avatar.svg" />
                                    </div>
                                    <div className="logon-user-title">
                                        <div className="sm-user-name">Isenewo Oluwaseyi</div>
                                        <div className="sm-user-email">isenewoephr2012@gmail.com</div>

                                    </div>
                                </div>
                            </div>
                            <div className="nav-btn-div">
                                {
                                    appState.navState.map(item => {
                                        return (
                                            <SmallNavBtn key={item.id} item={item} navBtnClick={navBtnClick} />
                                        )
                                    })
                                }
                            </div>
                        </div>
    );

};

export default HamburgerMenuItems