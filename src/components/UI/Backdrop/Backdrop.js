import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = props => <div onClick={props.click} className={classes.Backdrop}>{props.children}</div>

export default backdrop;