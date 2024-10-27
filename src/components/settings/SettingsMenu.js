import React, { useCallback, useEffect, useState } from 'react';

import '../../styles/settingsmenu.css';

function SettingsMenu ({ handleSetActiveContentView }) {

    const settingViewIdObj = JSON.parse(localStorage.getItem("settingsViewId"));

    const viewId = settingViewIdObj?.viewId;

    const [dynamicViewId, setDynamicViewId] = useState(viewId);


    const [menuItems, setMenuItems] = useState([
        {
            id: 1,
            name: "Account",
            isActive: true,
        },
        {
            id: 2,
            name: "Profile",
            isActive: false,
        },
        {
            id: 3,
            name: "Notification",
            isActive: false,
        },
        {
            id: 4,
            name: "Payment Methods",
            isActive: false,
        },
        {
            id: 5,
            name: "Privacy",
            isActive: false,
        },
        {
            id: 6,
            name: "Close Account",
            isActive: false,
        },
    ]);

    const handleSetActiveMenu = useCallback((id) => {
        let modMenu = menuItems.map(each => {
            if(each.id === id) {
                return { ...each, isActive: true }
            } else {

                return { ...each, isActive: false }
            }

        });

        setMenuItems(modMenu);

    },[menuItems]);

    const handleMenuItemClick = (id) => {
        handleSetActiveMenu(id);
        handleSetActiveContentView(id);
    }

    const activeStyle = {
        fontFamily: "Mulish Bold",
        color: "black",
        fontSize: "18px"
    }

    const inActiveStyle = {
        fontFamily: 'Mulish',
    }

    useEffect(() => {
        if(dynamicViewId) {
            handleSetActiveMenu(dynamicViewId);
        }

        return () => {
            setDynamicViewId(null)
        }

    },[dynamicViewId, handleSetActiveMenu]);

    return (
        <div className="settingsmenu">
          <ul className="menu-list">
            {
                menuItems.map(each => {

                    if(each.id === 6) {
                        return (
                            <li key={each.id} className='menu-item close-account' onClick={() => handleMenuItemClick(each.id)} style={each.isActive ? {...activeStyle, color: "#ff2a37" }: inActiveStyle}>{each.name}</li>
                        )
                    } else {
                        return (
                            <li key={each.id} className='menu-item' onClick={() => handleMenuItemClick(each.id)} style={each.isActive ? activeStyle : inActiveStyle}>{each.name}</li>
                        )
                    }
                })
            }
          </ul>
        </div>
      );

};

export default SettingsMenu;