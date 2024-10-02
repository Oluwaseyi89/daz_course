
import React, { useContext } from "react";

import {AppContext} from "../App";


function Header () {

    const appContext = useContext(AppContext);

    const appState = appContext;
    return (
        <div className="header">
            <div className="left-group">
                <img alt="daz-logo" src="../assets/images/daz_logo.svg"/>
                <span>DazCourse</span>
            </div>
            <div className="right-group"></div>
            <div className="hamburger-menu">
                <img alt="menu-ico" src="../assets/images/menu_icon.svg"/>
            </div>
        </div>
    );
}

export default Header;