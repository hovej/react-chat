import React from 'react';

import classes from './Button.module.css';

const button = props => {
  let classnames = '';
  switch (props.type) {
    case 'setting':
      classnames = classes.Setting;
      break;
    default:
      classnames = classes.Button;
      break;
  }

  return (
    <button disabled={props.disabled} onClick={props.clicked} className={classnames}>{props.children}</button>
  )
}

export default button;