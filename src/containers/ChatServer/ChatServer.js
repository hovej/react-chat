import React from 'react';

import axios from '../../axios-messages';
import Chat from '../../components/Chat/Chat';
import Members from '../../components/Members/Members';

class ChatServer extends React.Component {
  state = {
    messages: [],
    user: 'Anonymous',
    messageText: ''
  }

  componentDidMount() {
    axios.get('/messages.json')
      .then(response => {
        console.log(response.data);
        this.setState({ messages: response.data, user: this.props.user })
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateMessageHistory = () => {
    axios.get('/messages.json')
      .then(response => {
        console.log(response.data);
        this.setState({ messages: response.data })
      })
      .catch(error => {
        console.log(error);
      });
  }

  messageChangeHandler = e => {
    this.setState({ messageText: e.target.value });
    e.preventDefault();
  }

  sendMessageHandler = (e) => {
    const message = {
      text: this.state.messageText,
      user: this.state.user
    }
    if (this.state.messages.hasOwnProperty('initial')) {
      axios.delete('/messages/initial.json')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
    }
    axios.post('/messages.json', message)
    .then(response => {
      console.log(response);
      this.setState({messageText: ''});
      this.updateMessageHistory();
    })
    .catch(error => {
      console.log(error);
    });
    e.preventDefault();
  }

  render() {
    console.log('[ChatServer] rendering...')
    let chat = <Chat
      messages={this.state.messages}
      send={this.sendMessageHandler}
      changed={this.messageChangeHandler}
      update={this.updateMessageHistory}
      value={this.state.messageText}
    />
    if (!this.state.messages) {
      chat = null;
    }
    return (
      <div style={{ height: '75vh', display: 'flex' }}>
        {chat}
        <Members />
      </div>
    );
  }
}

export default ChatServer;