import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {
	
	componentDidMount() {
    	// this.setState({userData})
    };

  render() {
    return (
      <div>
        <h1>Welcome the React Demo App!</h1>
        <Link className="btn btn-success" to="user">User</Link>
        <Link className="btn btn-success" to="tag">Tag</Link>
        <Link className="btn btn-success" to="retention">Retention</Link>
        {this.props.children}
      </div>
    );
  }
}