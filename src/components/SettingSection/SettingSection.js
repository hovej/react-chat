import React from 'react';

import Setting from './Setting/Setting';
import classes from './SettingSection.module.css';

const SettingSection = props => {
  let settings = [];
  for (let i = 0; i < props.settings.length; i++) {
    settings.push(<Setting
      key={props.settings[i].name}
      name={props.settings[i].name}
      description={props.settings[i].description}
      click={props.click}
      settingType={props.settings[i].settingType}
    />)
  }

  return (
    <div className={classes.Section}>
      <h2>{props.title}</h2>
      {settings}
    </div>
  )
}

export default SettingSection;