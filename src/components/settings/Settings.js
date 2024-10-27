import React, { useState, useRef, useContext, useEffect, useCallback } from 'react';

import '../../styles/settings.css';
import AccountSettings from './AccountSettings';
import SettingsMenu from './SettingsMenu';
import ProfileSettings from './ProfileSettings';
import NotificationSettings from './NotificationSettings';
import PaymentMethods from './PaymentMethods';
import PrivacySettings from './PrivacySettings';
import CloseAccount from './CloseAccount';
import { AppContext } from '../../App';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';

function Settings (props) {
    
    const settingsTitleRef = useRef();

    const [isChevronUp, setIsChevronUp] = useState(true);

    let chevronRef = useRef();
    let smMenuRef = useRef();

    let currentChevronRef = chevronRef.current;
    let currentSmMenuRef = smMenuRef.current;
    
    const settingViewIdObj = JSON.parse(localStorage.getItem("settingsViewId"));

    const viewId = settingViewIdObj?.viewId;

    const [dynamicViewId, setDynamicViewId] = useState(viewId);




    const handleChevronClick = () => {
        if(isChevronUp) {
            setIsChevronUp(false);
            currentSmMenuRef.style.display = "block";
        } else {
            setIsChevronUp(true);
            currentSmMenuRef.style.display = "none";
        }
        
    }
   

    const { showMenu, userMenuVisible } = useContext(AppContext);

    useEffect(() => {
        const setIntructorPageTitle = () => {
            if(showMenu) {
                settingsTitleRef.current.style.position = "static";
            } else {
                settingsTitleRef.current.style.position = "fixed";
            }
        }
        setIntructorPageTitle();
        return () => {}
    },[showMenu]);

    useEffect(() => {
        const setIntructorPageTitle = () => {
            if(userMenuVisible) {
                settingsTitleRef.current.style.position = "static";
            } else {
                settingsTitleRef.current.style.position = "fixed";
            }
        }
        setIntructorPageTitle();
        return () => {}
    },[userMenuVisible]);

    const [viewChoice, setViewChoice] = useState([
        {
            id: 1,
            name: "account",
            isActive: true,
        },
        {
            id: 2,
            name: "profile",
            isActive: false,
        },
        {
            id: 3,
            name: "notification",
            isActive: false,
        },
        {
            id: 4,
            name: "payment_methods",
            isActive: false,
        },
        {
            id: 5,
            name: "privacy",
            isActive: false,
        },
        {
            id: 6,
            name: "close_account",
            isActive: false,
        },
    ]);

   

    const handleSetActiveContentView = useCallback((id) => {
        let modViewChoice = viewChoice.map(each => {
            if(each.id === id) return {...each, isActive: true};
            else return {...each, isActive: false};
        });

        setViewChoice(modViewChoice);
    },[viewChoice]);

    useEffect(() => {
        if(dynamicViewId) {
            handleSetActiveContentView(dynamicViewId);
        }

        return () => {
            setDynamicViewId(null);
        }

    },[dynamicViewId, handleSetActiveContentView]);

    const renderSettingChoice = () => {
        let activeChoice = viewChoice.find(each => each.isActive)
        let viewId = activeChoice.id

        switch(viewId) {
            case 1: return <AccountSettings/>;
            case 2: return <ProfileSettings/>;
            case 3: return <NotificationSettings/>;
            case 4: return <PaymentMethods/>;
            case 5: return <PrivacySettings/>;
            case 6: return <CloseAccount/>;
            default: return <AccountSettings/>
        }
    }

   


    return (
        <div className='settings'>
            <div ref={settingsTitleRef} className='settings-header'>
                <span>Settings</span>
                <span className='chevron'>
                    <div ref={chevronRef} onClick={() => handleChevronClick()}>
                       { isChevronUp ? <FaChevronDown/>  : <FaChevronUp/>}
                    </div>
                    <div ref={smMenuRef} className='sm-settings-menu'>                    
                        <SettingsMenu viewChoice={viewChoice} handleSetActiveContentView={handleSetActiveContentView}/>
                    </div>
                </span>
            </div>
            <div className='settings-middle'>
                <div className='settings-middle-left'>
                    {renderSettingChoice()}

                </div>
                <div className='settings-middle-right'>
                    <SettingsMenu viewChoice={viewChoice} handleSetActiveContentView={handleSetActiveContentView}/>
                </div>
            </div>
            <div className='clear-fix'></div>
        </div>
    );

};

export default Settings