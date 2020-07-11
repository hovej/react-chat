import React from 'react';

import classes from './Message.module.css';

const message = props => (
  <div className={classes.Message}>
    <h4 style={{margin: '2px'}}>{props.user}</h4>
    <p style={{margin: '2px'}}>{props.text}</p>
  </div>
);

export default message;