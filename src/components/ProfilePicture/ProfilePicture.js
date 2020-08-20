import React from 'react';

import bear from '../../assets/profilePictures/bear.png';
import bunny from '../../assets/profilePictures/bunny.png';
import cat from '../../assets/profilePictures/cat.png';
import cheetah from '../../assets/profilePictures/cheetah.png';
import mouse from '../../assets/profilePictures/mouse.png';
import panda from '../../assets/profilePictures/panda.png';
import pig from '../../assets/profilePictures/pig.png';
import tiger from '../../assets/profilePictures/tiger.png';

import classes from './ProfilePicture.module.css';

const ProfilePicture = props => {
  switch (props.picture) {
    case 'bear':
      return (
        <img src={bear} alt={props.picture} className={classes.Picture} style={{ width: `${props.size}px`, height: `${props.size}px` }} />
      )
    case 'bunny':
      return (
        <img src={bunny} alt={props.picture} className={classes.Picture} style={{ width: `${props.size}px`, height: `${props.size}px` }} />
      )
    case 'cat':
      return (
        <img src={cat} alt={props.picture} className={classes.Picture} style={{ width: `${props.size}px`, height: `${props.size}px` }} />
      )
    case 'cheetah':
      return (
        <img src={cheetah} alt={props.picture} className={classes.Picture} style={{ width: `${props.size}px`, height: `${props.size}px` }} />
      )
    case 'mouse':
      return (
        <img src={mouse} alt={props.picture} className={classes.Picture} style={{ width: `${props.size}px`, height: `${props.size}px` }} />
      )
    case 'panda':
      return (
        <img src={panda} alt={props.picture} className={classes.Picture} style={{ width: `${props.size}px`, height: `${props.size}px` }} />
      )
    case 'pig':
      return (
        <img src={pig} alt={props.picture} className={classes.Picture} style={{ width: `${props.size}px`, height: `${props.size}px` }} />
      )
    case 'tiger':
      return (
        <img src={tiger} alt={props.picture} className={classes.Picture} style={{ width: `${props.size}px`, height: `${props.size}px` }} />
      )

    default:
      return null;
  }
}

export default ProfilePicture;