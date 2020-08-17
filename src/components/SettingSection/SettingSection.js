import React from 'react';

import Setting from './Setting/Setting';
import classes from './SettingSection.module.css';

const SettingSection = props => {
  let settings = [];
  console.log(props);
  for (let i=0; i<props.settings.length; i++) {
    settings.push(<Setting key={props.settings[i].name} name={props.settings[i].name} description={props.settings[i].description} />)
  }

  return (
    <div className={classes.Section}>
      <h2>{props.title}</h2>
      {settings}
    </div>
  )
}

export default SettingSection;