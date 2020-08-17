import React from 'react';

import ProfilePicture from '../ProfilePicture/ProfilePicture';
import classes from './Message.module.css';

const message = props => (
  <div className={classes.Message}>
    <ProfilePicture size={25} />
    <div>
      <h4 style={{ margin: '2px' }}>{props.user}</h4>
      <p style={{ margin: '2px' }}>{props.text}</p>
    </div>
  </div>
);

export default message;