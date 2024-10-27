import React, {useState, useContext, useRef, useEffect} from 'react';
import { FaArrowRight, FaBell, FaChevronDown, FaChevronUp, FaGear, FaHeart, FaUser } from 'react-icons/fa6';

import '../styles/hamburgermenuitems.css';
import SmallNavBtn from './SmallNavBtn';
import { AppContext } from '../App';
import { AUTH_STATE_KEY } from '../states';

function HamburgerMenuItems ({ handleHideMenu, authState }) {

   const {email, fullName, image_url} = authState.user;

    const {appState, navBtnClick} = useContext(AppContext);
    const [expandUserMenu, setExpandUserMenu] = useState(false);

    const smUserMenuRef = useRef();

    const handleLogOutClick = () => {
        localStorage.removeItem(AUTH_STATE_KEY);
        window.location.href = "/";
    }

    const handleNavigateUserSettings = (viewId) => {

        localStorage.setItem("settingsViewId", JSON.stringify({viewId}));
        window.location.href = "/settings";
    }


    useEffect(() => {
        let currentSmUserMenuRef = smUserMenuRef.current;

        if(currentSmUserMenuRef && expandUserMenu) {
            currentSmUserMenuRef.style.display = "block";
        } else if (currentSmUserMenuRef && !expandUserMenu) {
            currentSmUserMenuRef.style.display =  "none";
        }

        return () => {}
    });

    return (
        <div className="hamburger-menu-items">
                            <div className="close-div">
                                <span className="nav-close-btn" onClick={handleHideMenu}>&times;</span>
                            </div>
                            <div className="menu-user-div">
                                <div className="user-pref-icon">
                                    <div className="pref-icon-img">
                                        {/* <img alt="love-icon" src="../assets/images/inactive_sm_favorite.svg" /> */}
                                        <FaHeart/>
                                    </div>
                                    <div className="pref-icon-title">Favorite</div>
                                </div>
                                <div className="user-pref-icon">
                                    <div className="pref-icon-img">
                                    {/* <img alt="notification-icon" src="../assets/images/inactive_sm_notification_icon.svg" /> */}
                                    <FaBell/>
                                    </div>
                                    <div className="pref-icon-title">Notifications</div>
                                </div>
                                <div className="sm-logon-user" onClick={() => setExpandUserMenu(!expandUserMenu)}>
                                    <div className="sm-user-icon">
                                    <img alt="user-avatar" src={image_url} />
                                    </div>
                                    <div className="logon-user-title">
                                        <div className="sm-user-name">{fullName}</div>
                                        <div className="sm-user-email">{email}</div>

                                    </div>
                                    <div className='sm-chevron-div' ><span>{expandUserMenu ? <FaChevronUp/> : <FaChevronDown/>}</span></div>
                                </div>
                                <div className='sm-user-menu-container' ref={smUserMenuRef} >     
                                    <div className='sm-user-menu' onClick={() => handleNavigateUserSettings(2)}>
                                        <span>Profile</span>
                                        <span><FaUser/></span>
                                    </div>
                                    <div className='sm-user-menu' onClick={() => handleNavigateUserSettings(1)}>
                                        <span>Account Settings</span>
                                        <span><FaGear/></span>
                                    </div>
                                    <div className='sm-user-menu' onClick={() => handleLogOutClick()}>
                                        <span>Log out</span>
                                        <span><FaArrowRight/></span>
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