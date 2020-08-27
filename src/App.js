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
    account: '',
    darkMode: false
  }

  login = (account) => {
    if (this.state.authenticated) {
      this.setState({
        authenticated: false,
        account: ''
      })
    } else {
      console.log(account);
      this.setState({
        account: account,
        authenticated: true,
        darkMode: account.darkMode
      });
    }
  }

  updateAccount = (updatedAccount) => {
    this.setState({ account: updatedAccount });
    console.log('updated');
  }

  toggleDarkMode = () => {
    this.setState(state => ({
      darkMode: !state.darkMode
    }))
  }

  render() {
    let redirect = <Redirect from='/' to='/login' />;
    if (this.state.authenticated) {
      redirect = null
    }

    return (
      <BrowserRouter>
        <Layout darkMode={this.state.darkMode}>
          <Switch>
            <Route path='/login' render={() => <Login login={this.login} {...this.props} />} />
            <Route path='/create' component={CreateAccount} />
            {redirect}
            <Route path='/home' render={() => <ChatServer account={this.state.account} darkMode={this.state.darkMode} />} />
            <Route path='/settings'
              render={() => <Settings
                account={this.state.account}
                toggleDark={this.toggleDarkMode}
                darkMode={this.state.darkMode}
                update={this.updateAccount}
              />}
            />
            <Route path='/news' render={() => <News darkMode={this.state.darkMode} />} />
            <Redirect from='/' exact to='/login'></Redirect>
            <Route path='/' component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }

}

export default App;