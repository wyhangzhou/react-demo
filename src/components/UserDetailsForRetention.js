import React, { Component } from 'react';

export default class UserDetailsForRetention extends Component {
	
	constructor () {
		super()
		this.state = {
			collapse: true,
		}
	}

	toggleDetail() {
		const collapse = !this.state.collapse
		this.setState({collapse})
	}

  render() {

  	const userData = this.props.data
  	const { collapse } = this.state
  	const displayNoneStyle = {
	  display: collapse ? "none" : "block",
	};
  	console.log(this.props)

    return (
		<div className="panel panel-default">
		  <div className="panel-body" >
		  	<p onClick={this.toggleDetail.bind(this)}>name: {userData.name}</p>
		  	<div style={displayNoneStyle}>
		  		<img src={userData.picture} className="img-circle" />
			  	<p>email: {userData.email}</p>
			  	<p>isActive: {userData.isActive.toString()}</p>
			  	<p>balance: {userData.balance}</p>
			  	<p>registered date: {userData.registered}</p>
			  	<p>company: {userData.company}</p>
			  	<p>phone: {userData.phone}</p>
			  	<ul>{userData.tags.map((tag, i) => <li key={i}>{tag}</li>)}</ul>
		  	</div>
		  </div>
		</div>
    );
  }
}