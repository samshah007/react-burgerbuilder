import React from 'react';
import Auxillary from '../../hoc/auxillary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Auxillary>
        <Toolbar></Toolbar>
        <SideDrawer></SideDrawer>
        <main className="layout-content">
            {props.children}
        </main>
    </Auxillary>
);

export default layout;