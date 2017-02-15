import React, { Component } from 'react';
import UserDetails from '../components/UserDetails.js'

export default class User extends Component {


  render() {
    var userData = this.props.route.data

    //sort user by date
    userData.sort(function(a, b){
      var keyA = Date.parse(a.registered.split(" ")[0]),
          keyB = Date.parse(b.registered.split(" ")[0]);
      if(keyA < keyB) return 1;
      if(keyA > keyB) return -1;
      return 0;
    });

    //get the active user
    userData = userData.filter((user) => {
      return user.isActive === true
    })

    console.log(userData)

    const usersPanels = userData.map((user, i) => {
      return (
        <UserDetails key={i} addTag={this.props.route.addTag} data={user}/>
        )
    })

    return (
      <div className="row">
        <div className="col-md-offset-2 col-md-4">
          <h1>User Page</h1>
          {usersPanels}
        </div>
      </div>
    )
  }
}