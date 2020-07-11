import React from 'react';

import classes from './Input.module.css';

const input = props => {
  let inputElement = null;
  let classArray = [classes.Input];
  let tooltip = null;
  if (!props.isValid && props.touched) {
    classArray.push(classes.invalid);
    tooltip = <p className={classes.Tooltip}>{props.tooltip}</p>
  }
  switch (props.elementType) {
    case 'input':
      inputElement = <input
        className={classArray.join(' ')}
        type={props.inputType}
        value={props.value}
        onChange={props.changed}
      />;
      break;
    default:
      break;
  }

  return (
    <div className={classes.Box}>
      <label className={classes.Label}>{props.name}</label>
      {inputElement}
      {tooltip}
    </div>
  )
}

export default input;