import React from 'react';
import axios from '../../axios-messages';

import SettingSection from '../../components/SettingSection/SettingSection';
import Modal from '../../components/UI/Modal/Modal';
import SettingsModalInfo from '../../components/SettingSection/SettingsModalInfo/SettingsModalInfo';

class Settings extends React.Component {
  state = {
    sections: [
      {
        name: 'Profile',
        settings: [
          {
            name: 'Profile Picture',
            description: 'Change your profile picture here.',
            settingType: 'picture',
            type: 'modal'
          },
          {
            name: 'Display Name',
            settingType: 'displayName',
            type: 'modal'
          },
          {
            name: 'Password',
            settingType: 'password',
            type: 'modal'
          },
          {
            name: 'Dark Mode',
            type: 'toggle'
          }
        ]
      }
    ],
    showModal: false,
    currentSetting: '',
    selectedImage: this.props.account.profilePicture,
    displayName: this.props.account.displayName,
    password: this.props.account.password
  }

  componentDidMount() {
    console.log(this.props.account);
  }

  handleTextChange(e, setting) {
    let updatedState = { ...this.state };
    updatedState[setting] = e.target.value;
    this.setState({...updatedState})
    e.preventDefault();
  }

  selectImage = (image) => {
    this.setState({ selectedImage: image });
  }

  saveSetting = () => {
    axios.get('/accounts.json')
      .then(response => {
        for (let account in response.data) {
          if (response.data[account].username === this.props.account.username) {
            let updatedAccount = { ...response.data[account] };
            updatedAccount.profilePicture = this.state.selectedImage;
            updatedAccount.displayName = this.state.displayName;
            updatedAccount.password = this.state.password;
            this.props.update(updatedAccount);
            console.log(updatedAccount);
            axios.delete(`accounts/${account}.json`)
              .then(response => {
                axios.post('/accounts.json', updatedAccount)
                  .then(response => {
                    this.toggleModal('');
                  })
                  .catch(err => {
                    console.log(err);
                  })
              })
              .catch(err => {
                console.log(err);
              })
          }
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  toggleModal = (setting) => {
    this.setState(state => ({
      showModal: !state.showModal,
      currentSetting: setting
    }))
  }

  render() {
    let settings = [];
    for (let i = 0; i < this.state.sections.length; i++) {
      settings.push(<SettingSection
        key={this.state.sections[i].name}
        title={this.state.sections[i].name + ' Settings'}
        settings={[...this.state.sections[i].settings]}
        click={this.toggleModal}
        toggle={this.props.toggleDark}
      />);
    }

    let modal = null;
    let modalProps = {
      save: this.saveSetting,
      type: this.state.currentSetting
    };
    switch (this.state.currentSetting) {
      case 'picture':
        modalProps.select = this.selectImage;
        modalProps.current = this.state.selectedImage;
        break;
      case 'displayName':
        modalProps.displayName = this.state.displayName;
        modalProps.change = (e) => this.handleTextChange(e, 'displayName');
        break;
      case 'password':
        modalProps.password = this.state.password;
        modalProps.change = (e) => this.handleTextChange(e, 'password');
        break;
      default:
        break;
    }
    if (this.state.showModal) {
          modal = <Modal click={this.toggleModal}>
            <SettingsModalInfo
              {...modalProps}
            />
          </Modal>;
    }

    return (
      <div style={{ textAlign: 'center' }}>
        {modal}
        <h1>Settings Page</h1>
        {settings}
      </div>
    )
  }
}

export default Settings;