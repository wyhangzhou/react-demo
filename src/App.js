import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

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

  addTag(id, tag) {
    this.state.userData.forEach((user) => {
      if (user._id === id) {
        user.tags.push(tag)
      }
    })
    this.setState(this.state)
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <Route path="user" component={User} addTag={this.addTag.bind(this)} data={this.state.userData}/>
          <Route path="tag" component={Tag} data={this.state.userData}/>
          <Route path="retention" component={Retention} data={this.state.userData}/>
        </Route>
      </Router>
    );
  }
}

export default App;
