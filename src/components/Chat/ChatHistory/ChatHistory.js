import React, { PureComponent } from 'react';

import classes from './ChatHistory.module.css';

import Message from '../../Message/Message';

class ChatHistory extends PureComponent {

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('updating...');
      this.props.update()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

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
      for (let account in this.props.accounts) {
        if (this.props.accounts[account].username === message.user) {
          return <Message key={i} name={message.name} text={message.text} picture={this.props.accounts[account].profilePicture} />
        }
      }
      return null;
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