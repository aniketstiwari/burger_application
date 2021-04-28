import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import ToolBar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => (
    <Aux>
        <ToolBar/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default Layout;