import React from 'react';

import Button from '../../UI/Button/Button';
import classes from './Setting.module.css';

const Setting = props => {
  return (
    <div className={classes.Setting}>
      <h4 className={classes.Title}>{props.name}</h4>
      <Button clicked={() => props.click(props.settingType)} type={'setting'}>CHANGE</Button>
    </div>
  )
}

export default Setting;