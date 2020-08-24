import React from 'react';

import classes from './Chat.module.css';
import ChatHistory from './ChatHistory/ChatHistory';
import ChatSend from './ChatSend/ChatSend';

const chat = props => {
  return (
    <div className={classes.Chat}>
      <ChatHistory update={props.update} messages={props.messages} accounts={props.accounts} />
      <ChatSend send={props.send} changed={props.changed} value={props.value} darkMode={props.darkMode} />
    </div>
  )
}

export default chat;