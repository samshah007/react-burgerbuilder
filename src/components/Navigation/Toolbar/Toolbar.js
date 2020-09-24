import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
    return(
        <header className="toolbar">            
            <DrawerToggle clicked={props.drawerToggleClicked}></DrawerToggle>
            <div className="toolBarLogo">
                <Logo></Logo>
            </div>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </header>
    )
}

export default toolbar;