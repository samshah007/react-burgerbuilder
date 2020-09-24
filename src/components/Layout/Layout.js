import React, {Component} from 'react';
import Auxillary from '../../hoc/auxillary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        showSideDrawer:false
    }
    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer:false})
    }
    drawerToggleHandler = () => {
        this.setState((prevState) =>{
            return { showSideDrawer:!prevState.showSideDrawer}
        })
    }
    render(){
        return (
            <Auxillary>
                <Toolbar drawerToggleClicked={this.drawerToggleHandler}></Toolbar>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}></SideDrawer>
                <main className="layout-content">
                    {this.props.children}
                </main>
            </Auxillary>
        )
    }
};

export default Layout;