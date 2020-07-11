import React from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Backdrop />
        <div className={classes.Modal}>
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}

export default Modal;