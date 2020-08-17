import React from 'react';

import SettingSection from '../../components/SettingSection/SettingSection';

class Settings extends React.Component {
  state = {
    sections: [
      {
        name: 'Profile',
        settings: [
          {
            name: 'Profile Picture',
            description: 'Change your profile picture here.'
          }
        ]
      }
    ]
  }

  render() {
    // let settings = [];
    // for (let i = 0; i < this.state.sections.length; i++) {
    //   settings.push(<SettingSection
    //     key={this.state.sections[i].name}
    //     title={this.state.sections[i].name + ' Settings'}
    //     settings={[...this.state.sections[i].settings]}
    //   />);
    // }

    return (
      <div style={{textAlign: 'center'}}>
        <h1>Settings Page</h1>
        <p>Settings content coming soon!</p>
       {/* /* {settings} */}
      </div>
    )
  }
}

export default Settings;