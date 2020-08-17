import React from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component {
  render() {
    let message = null;
    switch (this.props.type) {
      case 'version':
        message = 'There has been a recent update! Please be sure to take a look at the \'News\' page to see what\'s changed!';
        break;
      case 'create account':
        message = this.props.children;
        break;
      default:
        break;
    }

    return (
      <React.Fragment>
        <Backdrop click={this.props.click} />
        <div className={classes.Modal}>
          {message}
        </div>
      </React.Fragment>
    )
  }
}

export default Modal;