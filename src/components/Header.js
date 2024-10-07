
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import {AppContext} from "../App";
import TabNavButton from "./TabNavButton";
import Notifications from "./Notifications";
import HamburgerMenuItems from "./HamburgerMenuItems";

function Header ({}) {

    const {navBtnClick, appState} = useContext(AppContext);

    const [showMenu, setShowMenu] = useState(false);

    const [showNotification, setShowNotification] = useState(false);

    const handleShowMenu = () => setShowMenu(true);

    const handleHideMenu = () => setShowMenu(false);
    
    const handleNotificationPosition = () => {
        
        setShowNotification(true);
        
        setTimeout(() => setShowNotification(false), 5000);

    }
 
    return (
        <div className="header">
            <div className="upper-header">

                <Link to="/" style={{textDecoration: "none", textTransform: "none"}}> 
                    <div className="left-group" onClick={() => navBtnClick(1)}>
                        <img alt="daz-logo" src="../assets/images/daz_logo.svg"/>
                        <span>DazCourse</span>
                    </div>
                </Link>
                <div className="right-group">
                    <div className="love-block">
                        <img alt="love-icon" src="../assets/images/inactive_favorite.svg" />
                    </div>
                    <div className="notification-block" onClick={() => handleNotificationPosition()}>
                        <img alt="notification-icon" src="../assets/images/inactive_notification_icon.svg" />
                        {
                            showNotification ?
                            (
                            <div className="notification-container"> 
                                <Notifications/>
                            </div>
                            ) : ""
                        }
                    </div>
                    <div className="user-block">
                        <div className="user-avatar" >
                            <img alt="user-avatar" src="../assets/images/seyi.jpg" />
                        </div>
                        <div className="logon-user">
                            <div className="user-name">Isenewo Oluwaseyi</div>
                            <div className="email">isenewoephr2012@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className="hamburger-menu" onClick={() => handleShowMenu()}>
                    <img alt="menu-ico" src="../assets/images/menu_icon.svg"/>
                </div>
                {
                    showMenu ? (
                            <HamburgerMenuItems handleHideMenu={handleHideMenu} />
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