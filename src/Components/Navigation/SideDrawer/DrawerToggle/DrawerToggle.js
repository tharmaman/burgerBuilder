import React from 'react';

import classes from './DrawerToggle.css';

const drawerToggle = props => (
    // eslint-disable-next-line
    <div
        onClick={props.clicked}
        className={classes.DrawerToggle}
    >
        <div />
        <div />
        <div />
    </div>
);

export default drawerToggle;
