import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import ToolBar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        //the reason we are using function in setstate because setstate do not
        //update immediately
        this.setState( (prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <Aux>
                <ToolBar drawerToggleclicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;