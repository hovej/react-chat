import React from 'react';

import axios from '../../axios-messages';
import Chat from '../../components/Chat/Chat';
import Members from '../Members/Members';
import Feedback from '../Feedback/Feedback';
import classes from './ChatServer.module.css';
import Modal from '../../components/UI/Modal/Modal';

class ChatServer extends React.Component {
  state = {
    messages: [],
    user: 'anon123',
    name: 'Anonymous',
    messageText: '',
    currentVersion: '8162020',
    newVersion: false
  }

  componentDidMount() {
    axios.get('/messages.json')
      .then(response => {
        console.log(response.data);
        this.setState({ messages: response.data, user: this.props.account.username, name: this.props.account.displayName })
        axios.get('/accounts.json')
          .then(response => {
            for (let account in response.data) {
              console.log('check 0');
              if (response.data[account].username === this.state.user) {
                console.log('check 1')
                if (response.data[account].version !== this.state.currentVersion) {
                  console.log('check 2');
                  console.log(response.data[account]);
                  this.setState({ newVersion: true })
                  let updatedAccount = { ...response.data[account] };
                  updatedAccount.version = this.state.currentVersion;
                  axios.delete(`/accounts/${account}.json`)
                    .then(response => {
                      axios.post('/accounts.json', updatedAccount)
                        .then(response => {
                          console.log(response.data);
                        })
                        .catch(error => {
                          console.log(error);
                        })
                      console.log(response);
                    })
                    .catch(error => {
                      console.log(error);
                    })
                }
              }
            }
          })
          .catch(error => {
            console.log(error);
          })
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
      user: this.state.name
    }
    if (message.text.trim().length > 0) {
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
          this.setState({ messageText: '' });
          this.updateMessageHistory();
        })
        .catch(error => {
          console.log(error);
        });
    }
    e.preventDefault();
  }

  backdropClickHandler = e => {
    this.setState({ newVersion: false });
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
    let modal = this.state.newVersion ? <Modal click={this.backdropClickHandler} type='version' /> : null;
    return (
      <div className={classes.Server}>
        {modal}
        <Feedback />
        {chat}
        <Members />
      </div>
    );
  }
}

export default ChatServer;