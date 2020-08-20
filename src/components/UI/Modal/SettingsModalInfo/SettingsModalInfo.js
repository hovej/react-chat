import React from 'react';

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
    ],
    current: 'bear'
  }

  render() {
    switch (this.props.type) {
      case 'picture':
        let options = [];
        for (let i = 0; i < this.state.pictures.length; i++) {
          options.push(
            <PictureSetting
              click={this.props.click}
              key={this.state.pictures[i]}
              type={this.state.pictures[i]}
              current={this.state.pictures[i] === this.state.current}
            />
          )
        }
        return (
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 'auto'}}>
            <h3 style={{width: '100%'}}>Please select a new profile picture.</h3>
            {options}
          </div>
        )
      default:
        return null;
    }
  }
}

export default SettingsModalInfo;