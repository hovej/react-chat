import React from 'react';

import Button from '../../Button/Button';
import PictureSetting from './PictureSetting/PictureSetting';

class SettingsModalInfo extends React.Component {
  state = {
    pictures: [
      'bear',
      'bunny',
      'cat',
      'cheetah',
      'mouse',
      'panda',
      'pig',
      'tiger'
    ]
  }

  render() {
    switch (this.props.type) {
      case 'picture':
        let options = [];
        for (let i = 0; i < this.state.pictures.length; i++) {
          options.push(
            <PictureSetting
              click={this.props.select}
              key={this.state.pictures[i]}
              type={this.state.pictures[i]}
              current={this.state.pictures[i] === this.props.current}
            />
          )
        }
        return (
          <div style={{margin: 'auto', textAlign: 'center'}}>
            <h3 style={{ width: '100%' }}>Please select a new profile picture.</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 'auto' }}>
              {options}
            </div>
            <Button type='setting' clicked={() => this.props.save('profilePicture')}>SAVE</Button>
          </div>
        )
      default:
        return null;
    }
  }
}

export default SettingsModalInfo;