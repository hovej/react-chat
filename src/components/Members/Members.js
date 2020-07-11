import React from 'react';

import classes from './Members.module.css';
import Member from './Member/Member';

const members = props => {
  return (
    <div className={classes.Members}>
      Members
      <Member />
      <Member />
      <Member />
      <Member />
    </div>
  )
}

export default members;