import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

export default class Layout extends Component {
	

	navigate() {
		console.log(this.props)
		browserHistory.push("/")
	}

  render() {
  	const divStyle = {
	  backgroundColor: "#d3d3d3"
	};

    return (
      <div className="row">
      	<div className="col-md-offset-2 col-md-6" style={divStyle}>
	        <h1>Welcome the React Demo App!</h1>
	        <div className="btn-group">
		        <Link className="btn btn-success" to="user">User</Link>
		        <Link className="btn btn-success" to="tag">Tag</Link>
		        <Link className="btn btn-success" to="retention">Retention</Link>
		        <button className="btn btn-success" onClick={this.navigate.bind(this)}>Home</button>
	        </div>
	        {this.props.children}
	        <p>Home Page. Click nav button to explore!</p>
        </div>
      </div>
    );
  }
}