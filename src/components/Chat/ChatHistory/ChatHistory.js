import React, { PureComponent } from 'react';

import classes from './ChatHistory.module.css';
import Message from '../../Message/Message';

class ChatHistory extends PureComponent {

  // componentDidMount() {
  //   this.timer = setInterval(() => {
  //     console.log('updating...');
  //     this.props.update()
  //   }, 1000)
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  render() {
    let messages = [];
    const keys = Object.keys(this.props.messages);
    if (keys.length >= 20) {
      for (let i = keys.length - 1; i >= keys.length-50; i--) {
        messages.push(this.props.messages[keys[i]]);
      }
    } else {
      for (let i = keys.length - 1; i >= 0; i--) {
        messages.push(this.props.messages[keys[i]]);
      }
    }
    const newMessages = messages.map((message, i) => {
      return <Message key={i} user={message.user} text={message.text} />
    });
    console.log('[ChatHistory] rendering...');
    return (
      <div className={classes.History}>
        {newMessages}
      </div>
    )
  }
}

export default ChatHistory;