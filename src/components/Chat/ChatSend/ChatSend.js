import React from 'react';

import classes from './ChatSend.module.css';

const chatSend = props => {
  return (
      <form onSubmit={props.send} className={classes.ChatSend}>
        <input className={classes.Input} onChange={props.changed} value={props.value} placeholder='Enter your message here' />
        <button className={classes.Button}>SEND</button>
      </form>
  )
}

export default chatSend;