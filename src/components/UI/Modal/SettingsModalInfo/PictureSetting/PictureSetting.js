import React from 'react';

import bear from '../../../../../assets/profilePictures/bear.png';
import bunny from '../../../../../assets/profilePictures/bunny.png';
import cat from '../../../../../assets/profilePictures/cat.png';
import cheetah from '../../../../../assets/profilePictures/cheetah.png';
import mouse from '../../../../../assets/profilePictures/mouse.png';
import pig from '../../../../../assets/profilePictures/pig.png';
import tiger from '../../../../../assets/profilePictures/tiger.png';
import panda from '../../../../../assets/profilePictures/panda.png';

import classes from './PictureSetting.module.css';

const PictureSetting = props => {
  let classNames = [classes.Image];
  if (props.current) {
    classNames.push(classes.Current);
  }
  switch (props.type) {
    case 'bear':
      return <img
        onClick={() => props.click('profilePicture', 'bear')}
        className={classNames.join(' ')}
        src={bear}
        alt={props.type}
      />;
    case 'bunny':
      return <img
        onClick={() => props.click('profilePicture', 'bunny')}
        className={classNames.join(' ')}
        src={bunny}
        alt={props.type}
      />;
    case 'cat':
      return <img
        onClick={() => props.click('profilePicture', 'cat')}
        className={classNames.join(' ')}
        src={cat}
        alt={props.type}
      />;
    case 'cheetah':
      return <img
        onClick={() => props.click('profilePicture', 'cheetah')}
        className={classNames.join(' ')}
        src={cheetah}
        alt={props.type}
      />;
    case 'mouse':
      return <img
        onClick={() => props.click('profilePicture', 'mouse')}
        className={classNames.join(' ')}
        src={mouse}
        alt={props.type}
      />;
    case 'pig':
      return <img
        onClick={() => props.click('profilePicture', 'pig')}
        className={classNames.join(' ')}
        src={pig}
        alt={props.type}
      />;
    case 'tiger':
      return <img
        onClick={() => props.click('profilePicture', 'tiger')}
        className={classNames.join(' ')}
        src={tiger}
        alt={props.type}
      />;
    case 'panda':
      return <img
        onClick={() => props.click('profilePicture', 'panda')}
        className={classNames.join(' ')}
        src={panda}
        alt={props.type}
      />;
    default:
      break;
  }
}

export default PictureSetting;