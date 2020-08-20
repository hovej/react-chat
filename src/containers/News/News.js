import React from 'react';
import NewsItem from '../../components/NewsItem/NewsItem';

class News extends React.Component {
  state = {
    items: [
      {
        date: '8/23',
        updates: [
          'Profile pictures can now be changed! You have 8 different pictures to choose from at the moment.'
        ]
      },
      {
        date: '8/16',
        updates: [
          'Profile pictures are in the process of being implemented. Currently, everyone has been given the default picture and the ability to change it is not yet available.',
          'Usernames are no longer shown on the member list. With pictures being added, it added unnecessarily clutter the UI.',
          'Several small UI improvements.',
          'Bug fixed where a user could send empty messages.'
        ]
      },
      {
        date: '8/9',
        updates: [
          'No new updates - no time was spent on project'
        ]
      },
      {
        date: '8/2',
        updates: [
          'No new updates - no time was spent on project'
        ]
      },
      {
        date: '7/26',
        updates: [
          'Password while logging in is now hidden.',
          'A key is no longer required to create an account.',
          'Usernames are now shown under display names in the member list.',
          'Some styling changes made to the chat screen.'
        ]
      }
    ]
  }

  render() {
    let itemList = [];
    for (let i = 0; i < this.state.items.length; i++) {
      itemList.push(<h3 style={{marginTop: '30px', marginBottom: '0'}} key={this.state.items[i].date}>{this.state.items[i].date} Update</h3>);
      for (let j = 0; j < this.state.items[i].updates.length; j++) {
        itemList.push(<NewsItem key={this.state.items[i].date + j} content={this.state.items[i].updates[j]} />);
      }
    }

    return (
      <div style={{ margin: 'auto', width: '400px' }}>
        <h1 style={{ textAlign: 'center' }}>NEWS</h1>
        {itemList}
      </div>
    )
  }
}

export default News;