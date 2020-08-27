import React from 'react';

import Button from '../../UI/Button/Button';
import PictureSetting from './PictureSetting/PictureSetting';
import Input from '../../UI/Input/Input'

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
            <Button type='setting' clicked={this.props.save}>SAVE</Button>
          </div>
        )
      case 'displayName':
        return (
          <div style={{margin: 'auto', textAlign: 'center'}}>
            <h3>Please enter your new display name.</h3>
            <Input elementType='input' type='text' value={this.props.displayName} changed={this.props.change} />
            <Button type='setting' clicked={this.props.save}>SAVE</Button>
          </div>
        )
      case 'password':
        return (
          <div style={{margin: 'auto', textAlign: 'center'}}>
            <h3>Please enter your new password.</h3>
            <Input elementType='input' type='text' value={this.props.password} changed={this.props.change} />
            <Button type='setting' clicked={this.props.save}>SAVE</Button>
          </div>
        )
      default:
        return null;
    }
  }
}

export default SettingsModalInfo;