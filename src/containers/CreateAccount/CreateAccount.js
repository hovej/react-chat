import React from 'react';
import axios from '../../axios-messages';
import { Link } from 'react-router-dom';

import classes from './CreateAccount.module.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import CreateSuccess from './CreateSuccess/CreateSuccess';

class CreateAccount extends React.Component {
  state = {
    createAccountForm: {
      username: {
        name: 'Username',
        elementType: 'input',
        inputType: 'text',
        validation: {
          isRequired: true,
          minLength: 5,
          maxLength: 15
        },
        valid: false,
        touched: false,
        value: '',
        tooltip: 'A unique username between 5-15 characters'
      },
      displayName: {
        name: 'Display Name',
        elementType: 'input',
        inputType: 'text',
        validation: {
          isRequired: true,
          minLength: 1,
          maxLength: 20
        },
        valid: false,
        touched: false,
        value: '',
        tooltip: 'This is the name other people will see you as'
      },
      password: {
        name: 'Password',
        elementType: 'input',
        inputType: 'text',
        validation: {
          isRequired: true,
          minLength: 6,
          maxLength: 20
        },
        valid: false,
        touched: false,
        value: '',
        tooltip: 'Password must be between 6-20 characters'
      },
      key: {
        name: 'Key',
        elementType: 'input',
        inputType: 'text',
        validation: {
          isRequired: true,
          minLength: 1,
          maxLength: 15
        },
        valid: false,
        touched: false,
        value: '',
        tooltip: 'The unique key that was given to you to test'
      }
    },
    validInfo: false,
    keys: [],
    usernames: [],
    submitted: false
  }

  componentDidMount() {
    console.log(this.props);
    const keys = [];
    const usernames = [];
    axios.request('/keys.json')
      .then(res => {
        console.log(res);
        for (let key in res.data) {
          keys.push({
            name: key,
            key: res.data[key]
          })
        }
        console.log(keys);
        axios.request('/accounts.json')
          .then(res => {
            console.log(res);
            for (let account in res.data) {
              usernames.push(res.data[account].username)
            }
            console.log(usernames);
            this.setState({ keys: keys, usernames: usernames, submitted: false });
          })
      })
      .catch(error => {
        console.log(error);
      })
  }

  onChangeHandler = (e, inputFormElement) => {
    const accountForm = { ...this.state.createAccountForm };
    const accountFormElement = { ...this.state.createAccountForm[inputFormElement] };
    accountFormElement.value = e.target.value;
    accountFormElement.valid = this.checkValidation(accountFormElement.value, accountFormElement.validation);
    accountFormElement.touched = true;
    accountForm[inputFormElement] = accountFormElement;
    let isAccountValid = this.isAccountValid(accountForm);
    this.setState({
      createAccountForm: accountForm,
      validInfo: isAccountValid
    });
    e.preventDefault();
  }

  checkValidation = (inputFormElement, rules) => {
    let isValid = true;
    if (rules.isRequired) {
      isValid = inputFormElement.length > 0 && isValid;
    }
    if (rules.minLength) {
      isValid = inputFormElement.length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
      isValid = inputFormElement.length <= rules.maxLength && isValid
    }
    return isValid;
  }

  isAccountValid = (form) => {
    let isValid = true;
    for (let elementType in form) {
      isValid = form[elementType].valid && isValid;
    }
    return isValid;
  }

  createNewAccount = (e) => {
    e.preventDefault();
    const account = {
      username: this.state.createAccountForm.username.value,
      displayName: this.state.createAccountForm.displayName.value,
      password: this.state.createAccountForm.password.value
    }
    let shouldPost = false;
    let usedKey;
    for (let i = 0; i < this.state.keys.length; i++) {
      if (this.state.createAccountForm.key.value === this.state.keys[i].key) {
        shouldPost = true;
        usedKey = this.state.keys[i].name;
      }
    }
    for (let i = 0; i < this.state.usernames.length; i++) {
      if (account.username === this.state.usernames[i]) {
        shouldPost = false;
        const form = { ...this.state.createAccountForm };
        const username = { ...form.username };
        username.value = 'This username is taken.';
        username.valid = false;
        form.username = username;
        this.setState({ createAccountForm: form });
      }
    }
    if (shouldPost) {
      axios.post('/accounts.json', account)
        .then(res => {
          this.setState({ submitted: true });
          axios.delete('/keys/' + usedKey + '.json')
            .then(res => {
              console.log(res);
            })
            .catch(error => {
              console.log(error);
            })
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      const form = { ...this.state.createAccountForm };
      const key = { ...form.key };
      key.value = 'Please enter a valid key.';
      key.valid = false;
      form.key = key;
      this.setState({ createAccountForm: form });
    }
  };

  render() {
    const inputs = [];
    for (let formElement in this.state.createAccountForm) {
      inputs.push({
        name: formElement,
        config: this.state.createAccountForm[formElement]
      });
    }
    const newInputElements = inputs.map(el => {
      return (
        <Input
          key={el.name}
          elementType={el.config.elementType}
          inputType={el.config.inputType}
          value={el.config.value}
          name={el.config.name}
          changed={(event) => this.onChangeHandler(event, el.name)}
          isValid={el.config.valid}
          touched={el.config.touched}
          tooltip={el.config.tooltip}
        />
      )
    })
    let showModal = null
    if (this.state.submitted) {
      console.log(this.state.keys);
      showModal = <Modal {...this.props}><CreateSuccess /></Modal>
    }
    return (
      <div className={classes.Page}>
        {showModal}
        <h1>Welcome to React Chat!</h1>
        <p>Create an Account</p>
        <form onSubmit={this.createNewAccount} className={classes.Create}>
          {newInputElements}
          <Button disabled={!this.state.validInfo}>CREATE</Button>
        </form>
        <p>Already have an account? Sign in <Link to='/login'>here</Link>.</p>
      </div>
    )
  }
}

export default CreateAccount;