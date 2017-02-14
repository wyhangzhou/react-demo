import React, { Component } from 'react';

export default class User extends Component {


  render() {
    console.log(this.props.route.data)
    // const usersLi = this.props.route.data.map((user, i) => <li key={i}>user<li>)

    // console.log(users)
    return (
      <div>
        <h1>User Page</h1>
      </div>
    )
  }
}