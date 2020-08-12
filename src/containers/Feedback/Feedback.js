import React from 'react';
import axios from '../../axios-messages';

import classes from './Feedback.module.css';

class Feedback extends React.PureComponent {
  state = {
    text: ''
  }

  onChangeHandler = (e) => {
    this.setState({ text: e.target.value });
    e.preventDefault();
  }

  onSubmitHandler = (e) => {
    const feedback = {
      text: this.state.text
    }
    axios.post('/feedback.json', feedback)
      .then(res => {
        console.log(res);
        this.setState({ text: '' })
      })
      .catch(error => {
        console.log(error)
      })
    e.preventDefault();
  }

  render() {
    return (
      <form className={classes.Form} onSubmit={this.onSubmitHandler}>
        <textarea
          className={classes.Input}
          onChange={this.onChangeHandler}
          placeholder='Please enter your feedback here!'
          value={this.state.text}
        />
        <button className={classes.Button}>Submit</button>
      </form>
    )
  }
}

export default Feedback;