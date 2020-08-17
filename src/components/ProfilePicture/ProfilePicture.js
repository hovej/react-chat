import React from 'react';

import bear from '../../assets/profilePictures/bear.png';
import classes from './ProfilePicture.module.css';

const ProfilePicture = props => (
  <img src={bear} alt='bear' className={classes.Picture} style={{width: `${props.size}px`, height: `${props.size}px`}} />
)

export default ProfilePicture;