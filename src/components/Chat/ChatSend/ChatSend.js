import React from 'react';

import classes from './ChatSend.module.css';
import darkClasses from '../../../Darkmode.module.css';

const chatSend = props => {
  const inputClasses = [classes.Input];
  const buttonClasses = [classes.Button];
  if (props.darkMode) {
    inputClasses.push(darkClasses.Input);
    buttonClasses.push(classes.DarkButton);
  }
  return (
      <form onSubmit={props.send} className={classes.ChatSend}>
        <input className={inputClasses.join(' ')} onChange={props.changed} value={props.value} placeholder='Enter your message here' />
        <button className={buttonClasses.join(' ')}>SEND</button>
      </form>
  )
}

export default chatSend;