
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import {AppContext} from "../App";
import TabNavButton from "./TabNavButton";
import SmallNavBtn from "./SmallNavBtn";

function Header ({}) {

    const {navBtnClick, appState} = useContext(AppContext);

    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => setShowMenu(true);

    const handleHideMenu = () => setShowMenu(false);

   
    return (
        <div className="header">
            <div className="upper-header">

                <Link to="/" style={{textDecoration: "none"}}> 
                    <div className="left-group" onClick={() => navBtnClick(1)}>
                        <img alt="daz-logo" src="../assets/images/daz_logo.svg"/>
                        <span>DazCourse</span>
                    </div>
                </Link>
                <div className="right-group">
                    <div className="love-block">
                        <img alt="love-icon" src="../assets/images/inactive_favorite.svg" />
                    </div>
                    <div className="notification-block">
                        <img alt="notification-icon" src="../assets/images/inactive_notification_icon.svg" />
                    </div>
                    <div className="user-block">
                        <div className="user-avatar" >
                            <img alt="user-avatar" src="../assets/images/user_avatar.svg" />
                        </div>
                        <div className="logon-user">
                            <div className="user-name">Isenewo Oluwaseyi</div>
                            <div className="email">isenewoephr2012@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className="hamburger-menu" onClick={handleShowMenu}>
                    <img alt="menu-ico" src="../assets/images/menu_icon.svg"/>
                </div>
                {
                    showMenu ? (

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
                    ) : ""

                }
            </div>
            <div className="lower-header">
                <div className="tab-nav-container">
                    {
                        appState.navState.map(item => {
                            return (
                                <TabNavButton key={item.id} item={item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;