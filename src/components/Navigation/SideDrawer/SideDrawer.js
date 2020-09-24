import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css'

const sideDrawer = (props) => {
    
    return(
        <div className="sideDrawer">
            <div className="sideDrawerLogo">
                <Logo></Logo>
            </div>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </div>
    )
}
export default sideDrawer;