import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link, browserHistory } from 'react-router';

import Layout from './pages/Layout.js';
import User from './pages/User.js';
import Tag from './pages/Tag.js';
import Retention from './pages/Retention.js';

import userData from './data/generated.json';


class App extends Component {
  constructor () {
      super()
      this.state = {userData}
  }

  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React haha</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <Route path="user" component={User} data={this.state.userData}/>
          <Route path="tag" component={Tag} />
          <Route path="retention" component={Retention} />
        </Route>
      </Router>
    );
  }
}

export default App;
