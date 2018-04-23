import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom'; 

import UsersTable from './components/UsersTable'
import User from './components/User'
import NewUser from './components/NewUser'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={UsersTable} />
        <Route exact path='/user/:id' component={User} />
        <Route exact path='/newuser' component={NewUser} />
      </Switch>
    );
  }
}

export default App;
