import React from 'react';
import NewsItem from '../../components/NewsItem/NewsItem';

class News extends React.Component {
  state = {
    items: [
      {
        date: '7/26',
        updates: [
          'Password while logging in is now hidden.',
          'A key is no longer required to create an account.',
          'Usernames are now shown under display names in the member list.',
          'Some styling changes made to the chat screen.'
        ]
      },
      {
        date: '8/2',
        updates: [
          
        ]
      }
    ]
  }

  render() {
    let itemList = [];
    for (let i = 0; i < this.state.items.length; i++) {
      itemList.push(<h3 key={this.state.items[i].date}>{this.state.items[i].date} Update</h3>);
      for (let j = 0; j < this.state.items[i].updates.length; j++) {
        itemList.push(<NewsItem key={j} content={this.state.items[i].updates[j]} />);
      }
    }

    return (
      <div style={{ margin: 'auto', width: '400px' }}>
        <h1 style={{ textAlign: 'center' }}>NEWS PAGE</h1>
        {itemList}
      </div>
    )
  }
}

export default News;