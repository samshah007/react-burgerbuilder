import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return(
        <header className="toolbar">
            <div>Menu</div>
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