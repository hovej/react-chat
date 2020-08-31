import React from 'react';

import Button from '../../UI/Button/Button';
import PictureSetting from './PictureSetting/PictureSetting';
import Input from '../../UI/Input/Input';
import SettingSuccess from '../Setting/SettingSuccess/SettingSuccess';

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
    password: {
      isValid: false,
      validation: {
        minLength: 6,
        maxLength: 20
      },
      attempted: false,
      tooltip: 'Password must be between 6-20 characters.'
    },
    displayName: {
      isValid: false,
      validation: {
        minLength: 1,
        maxLength: 20
      },
      attempted: false,
      tooltip: 'Display name must be between 1-20 characters.'
    },
    success: false
  }

  checkValidation = (input, rules) => {
    let isValid = true;
    if (rules.minLength) {
      isValid = input.length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
      isValid = input.length <= rules.maxLength && isValid
    }
    return isValid;
  }

  newPasswordSave = () => {
    if (this.checkValidation(this.props.password, this.state.password.validation)) {
      this.setState({success: true})
      this.props.save();
    } else {
      const inputInfo = {...this.state.password};
      inputInfo.attempted = true;
      this.setState({password: {...inputInfo}});
    }
  }

  newDisplayNameSave = () => {
    if (this.checkValidation(this.props.displayName, this.state.displayName.validation)) {
      this.setState({success: true})
      this.props.save();
    } else {
      const inputInfo = {...this.state.displayName};
      inputInfo.attempted = true;
      this.setState({displayName: {...inputInfo}});
    }
  }

  render() {
    if (this.state.success) {
      return <SettingSuccess setting={this.props.type} />
    }
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
          <div style={{ margin: 'auto', textAlign: 'center' }}>
            <h3 style={{ width: '100%' }}>Please select a new profile picture.</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 'auto' }}>
              {options}
            </div>
            <Button type='setting' clicked={this.props.save}>SAVE</Button>
          </div>
        )
      case 'displayName':
        let displayTooltip = null;
        if (this.state.displayName.attempted) {
          displayTooltip = <p style={{color: 'red'}}>{this.state.displayName.tooltip}</p>
        }
        return (
          <div style={{ margin: 'auto', textAlign: 'center' }}>
            <h3>Please enter your new display name.</h3>
            <Input elementType='input' type='text' value={this.props.displayName} changed={this.props.change} />
            {displayTooltip}
            <Button type='setting' clicked={this.newDisplayNameSave}>SAVE</Button>
          </div>
        )
      case 'password':
        let passTooltip = null;
        if (this.state.password.attempted) {
          passTooltip = <p style={{color: 'red'}}>{this.state.password.tooltip}</p>
        }
        return (
          <div style={{ margin: 'auto', textAlign: 'center' }}>
            <h3>Change Your Password</h3>
            <label>Please enter your new password.
            <Input elementType='input' type='text' value={this.props.password} changed={this.props.change} />
            </label>
            {passTooltip}
            <Button type='setting' clicked={this.newPasswordSave}>SAVE</Button>
          </div>
        )
      default:
        return null;
    }
  }
}

export default SettingsModalInfo;