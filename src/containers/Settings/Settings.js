import React from 'react';
import axios from '../../axios-messages';

import SettingSection from '../../components/SettingSection/SettingSection';
import Modal from '../../components/UI/Modal/Modal';
import SettingsModalInfo from '../../components/UI/Modal/SettingsModalInfo/SettingsModalInfo';

class Settings extends React.Component {
  state = {
    sections: [
      {
        name: 'Profile',
        settings: [
          {
            name: 'Profile Picture',
            description: 'Change your profile picture here.',
            settingType: 'picture'
          },
          {
            name: 'Display Name',
            description: 'Change your display here.',
            settingType: 'displayName'
          }
        ]
      }
    ],
    showModal: false,
    currentSetting: '',
    selectedImage: this.props.account.profilePicture
  }

  componentDidMount() {
    console.log(this.props.account);
  }

  selectImage = (image) => {
    this.setState({ selectedImage: image });
  }

  saveSetting = (setting) => {
    axios.get('/accounts.json')
      .then(response => {
        for (let account in response.data) {
          if (response.data[account].username === this.props.account.username) {
            let updatedAccount = { ...response.data[account] };
            updatedAccount[setting] = this.state.selectedImage;
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
      />);
    }

    let modal = null;
    if (this.state.showModal) {
      modal = <Modal click={this.toggleModal}>
        <SettingsModalInfo
          select={this.selectImage}
          current={this.state.selectedImage}
          save={this.saveSetting}
          type={this.state.currentSetting}
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