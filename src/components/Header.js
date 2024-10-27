
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBell, FaChevronDown, FaChevronUp, FaGear, FaHeart, FaUser } from "react-icons/fa6";

import {AppContext} from "../App";
import TabNavButton from "./TabNavButton";
import Notifications from "./Notifications";
import HamburgerMenuItems from "./HamburgerMenuItems";
import { AUTH_STATE_KEY } from "../states";

function Header () {

    const {navBtnClick, appState, showMenu, setShowMenu, userMenuVisible, setUserMenuVisible} = useContext(AppContext);

    const userMenuRef = useRef();
    
    console.log(userMenuVisible);


    const handleNavigateUserSettings = (viewId) => {

        localStorage.setItem("settingsViewId", JSON.stringify({viewId}));
        window.location.href = "/settings";
    }

   
    const handleToggleUserMenu = () => {
        if(userMenuRef && userMenuVisible) {
            userMenuRef.current.style.display = "none";
            setUserMenuVisible(false);
        } else {
            userMenuRef.current.style.display = "block";
            setUserMenuVisible(true);
        }
    }

    const handleLogOutClick = () => {
        localStorage.removeItem(AUTH_STATE_KEY);
        window.location.href = "/";
    }

    const { authState } = appState;

    const {fullName, email, image_url} = authState.user;


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
                        {/* <img alt="love-icon" src="../assets/images/inactive_favorite.svg" /> */}
                        <FaHeart style={{color: "var(--active-nav-btn-color)"}}/>
                    </div>
                    <div className="notification-block" onClick={() => handleNotificationPosition()}>
                        {/* <img alt="notification-icon" src="../assets/images/inactive_notification_icon.svg" /> */}
                        <FaBell style={{color: "var(--active-nav-btn-color)"}}/>
                        {
                            showNotification ?
                            (
                            <div className="notification-container"> 
                                <Notifications/>
                            </div>
                            ) : ""
                        }
                    </div>
                    <div className="user-block" onClick={() => handleToggleUserMenu()}>
                        <div className="user-avatar" >
                            <img alt="user-avatar" src={image_url} />
                        </div>
                        <div className="logon-user">
                            <div className="user-name">{fullName}</div>
                            <div className="email">{email}</div>
                        </div>
                        <div className="user-menu-drop-btn" >{userMenuVisible ? <span><FaChevronUp/></span> : <span><FaChevronDown/></span>}</div>
                        <div ref={userMenuRef} className="user-menu">
                            {/* <div className="user-menu-closer">{userMenuVisible ? <span><FaChevronUp/></span> : <span><FaChevronDown/></span>}</div> */}
                            <ul>
                                <li onClick={() => handleNavigateUserSettings(2)}><span>Profile</span><span><FaUser/></span></li>
                                <li onClick={() => handleNavigateUserSettings(1)}><span >Accout Settings</span><span><FaGear/></span></li>
                                <li onClick={() => handleLogOutClick()}><span>Log out</span><span><FaArrowRight/></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="hamburger-menu" onClick={() => handleShowMenu()}>
                    <img alt="menu-ico" src="../assets/images/hoz_menu_icon.svg"/>
                </div>
                {
                    showMenu ? (
                            <HamburgerMenuItems authState={authState} handleHideMenu={handleHideMenu} />
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