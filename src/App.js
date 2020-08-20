import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import ChatServer from './containers/ChatServer/ChatServer';
import NotFound from './components/UI/NotFound/NotFound';
import CreateAccount from './containers/CreateAccount/CreateAccount';
import Login from './containers/Login/Login';
import Settings from './containers/Settings/Settings';
import News from './containers/News/News';

class App extends React.Component {
  state = {
    authenticated: false,
    account: ''
  }

  updateDisplayName = (account) => {
    if (this.state.authenticated) {
      this.setState({
        authenticated: false,
        account: ''
      })
    } else {
      console.log(account);
      this.setState({
        account: account,
        authenticated: true
      });
    }
  }

  render() {
    let redirect = <Redirect from='/' to='/login' />;
    if (this.state.authenticated) {
      redirect = null
    }

    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path='/login' render={() => <Login updateName={this.updateDisplayName} {...this.props} />} />
            <Route path='/create' component={CreateAccount} />
            {redirect}
            <Route path='/home' render={() => <ChatServer account={this.state.account} />} />
            <Route path='/settings' render={() => <Settings account={this.state.account} />} />
            <Route path='/news' component={News} />
            <Redirect from='/' exact to='/login'></Redirect>
            <Route path='/' component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }

}

export default App;
