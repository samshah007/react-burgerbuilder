import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxillary from '../../../hoc/auxillary';

const sideDrawer = (props) => {
    let attachedClasses = ['sideDrawer','close'];
    if(props.open){
        attachedClasses = ['sideDrawer','open'];
    }
    return(
        <Auxillary>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
            <div className={attachedClasses.join(' ')}>
                <div className="sideDrawerLogo">
                    <Logo></Logo>
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Auxillary>
    )
}
export default sideDrawer;