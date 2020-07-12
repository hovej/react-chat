import React from 'react';
import axios from '../../axios-messages';

import classes from './Members.module.css';
import Member from './Member/Member';

class Members extends React.PureComponent {
  state = {
    members: []
  }

  componentDidMount() {
    const memberList = [];
    axios.request('/accounts.json')
      .then(res => {
        for (let account in res.data) {
          console.log(account)
          memberList.push({
            name: res.data[account].displayName,
            key: res.data[account].name
          });
        }
        this.setState({ members: memberList })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    let list = [];
    if (this.state.members.length > 0) {
      list = this.state.members.map(member => {
        return (
          <Member key={member.key} name={member.name} />
        )
      })
    }
    return (
      <div className={classes.Members}>
        <h3>MEMBERS</h3>
        {list}
      </div>
    )
  }
}

export default Members;