import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import ChatServer from './containers/ChatServer/ChatServer';
import NotFound from './components/UI/NotFound/NotFound';
import CreateAccount from './containers/CreateAccount/CreateAccount';
import Login from './containers/Login/Login';

class App extends React.Component {
  state = {
    authenticated: true,
    displayName: 'Justin'
  }

  updateDisplayName = (name) => {
    console.log(this.state.authenticated);
    this.setState({
      displayName: name,
      authenticated: false
    });
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
            <Route path='/login' render={ () => <Login updateName={this.updateDisplayName} {...this.props} />} />
            <Route path='/create' component={CreateAccount} />
            {redirect}
            <Route path='/home' render={ () => <ChatServer user={this.state.displayName} />} />
            <Redirect from='/' exact to='/login'></Redirect>
            <Route path='/' component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }

}

export default App;
