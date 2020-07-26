import React from 'react';
import axios from '../../axios-messages';

import classes from './Members.module.css';
import Member from '../../components/Member/Member';

class Members extends React.PureComponent {
  state = {
    members: []
  }

  componentDidMount() {
    const memberList = [];
    axios.request('/accounts.json')
      .then(res => {
        for (let account in res.data) {
          memberList.push({
            name: res.data[account].displayName,
            username: res.data[account].username
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
          <Member key={member.username} name={member.name} user={member.username} />
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