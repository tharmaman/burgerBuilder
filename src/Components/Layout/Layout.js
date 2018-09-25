import React from 'react';
import Aux from '../../hocs/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ({ children }) => (
    <Aux>
        <Toolbar />
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {children}
        </main>
    </Aux>
);

export default layout;
