import React from 'react';
import {Link} from 'react-router-dom';

import classes from './CreateSuccess.module.css';

const createSuccess = props => (
  <div className={classes.CreateSuccess}>
    <h3>Congrats!</h3>
    <p>Your account has been successfully created.</p>
    <p>Please continue to the login page.</p>
    <Link className={classes.Link} to='/login'>CONTINUE</Link>
  </div>
)

export default createSuccess;