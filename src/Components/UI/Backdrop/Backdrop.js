import React from 'react';

import classes from './Backdrop.css';

const backdrop = props => (
    // eslint-disable-next-line
    props.show ? <div className={classes.Backdrop} onClick={props.clicked} /> : null
);

export default backdrop;
