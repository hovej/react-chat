import React from 'react';

import Setting from './Setting/Setting';
import classes from './SettingSection.module.css';

const SettingSection = props => {
  let settings = [];
  for (let i = 0; i < props.settings.length; i++) {
    if (props.settings[i].type === 'modal') {
      settings.push(<Setting
        key={props.settings[i].name}
        name={props.settings[i].name}
        description={props.settings[i].description}
        click={props.click}
        type={props.settings[i].type}
        settingType={props.settings[i].settingType}
      />)
    } else if (props.settings[i].type === 'toggle') {
      settings.push(<Setting
        key={props.settings[i].name}
        name={props.settings[i].name}
        description={props.settings[i].description}
        click={props.toggle}
        type={props.settings[i].type}
        settingType={props.settings[i].settingType}
      />)
    }
  }

  return (
    <div className={classes.Section}>
      <h2>{props.title}</h2>
      {settings}
    </div>
  )
}

export default SettingSection;