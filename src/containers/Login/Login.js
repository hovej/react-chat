import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from '../../axios-messages';

import classes from './Login.module.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class Login extends React.Component {
  state = {
    loginForm: {
      username: {
        name: 'Username',
        elementType: 'input',
        inputType: 'text',
        value: ''
      },
      password: {
        name: 'Password',
        elementType: 'input',
        inputType: 'text',
        value: ''
      }
    },
    validForm: true
  }

  componentDidMount() {
    console.log(this.props);
  }

  onChangeHandler = (e, formElement) => {
    const form = { ...this.state.loginForm };
    const element = { ...form[formElement] };
    element.value = e.target.value;
    form[formElement] = element;
    this.setState({ loginForm: form });
    e.preventDefault();
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const users = [];
    let validInfo = false;
    axios.request('/accounts.json')
      .then(response => {
        for (let account in response.data) {
          users.push({
            name: account,
            username: response.data[account].username,
            password: response.data[account].password,
            displayName: response.data[account].displayName
          });
        }
        for (let i = 0; i < users.length; i++) {
          if (users[i].username === this.state.loginForm.username.value && users[i].password === this.state.loginForm.password.value) {
            validInfo = true;
            this.props.updateName(users[i].displayName);
            this.props.history.push('/home');
          }
        }
        if (!validInfo) {
          this.setState({
            validForm: false
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    let invalidMessage = null;
    if (!this.state.validForm) {
      invalidMessage = <p style={{ color: 'red' }}>The username or password you entered is incorrect.</p>
    }

    const formElements = [];
    for (let element in this.state.loginForm) {
      formElements.push({
        name: element,
        config: this.state.loginForm[element]
      });
    }

    const allInputs = formElements.map(el => {
      return (
        <Input
          key={el.name}
          name={el.config.name}
          elementType={el.config.elementType}
          inputType={el.config.inputType}
          value={el.config.value}
          changed={(e) => this.onChangeHandler(e, el.name)}
        />
      )
    })

    return (
      <div className={classes.Page}>
        <h1>Welcome to React Chat!</h1>
        <p>Please login below.</p>
        <form onSubmit={this.onSubmitHandler} className={classes.Container}>
          {invalidMessage}
          {allInputs}
          <Button>LOGIN</Button>
        </form>
        <p>Don't have an account yet? Sign up <Link to='/create'>here</Link>.</p>
      </div>
    )
  }
}

export default withRouter(Login);