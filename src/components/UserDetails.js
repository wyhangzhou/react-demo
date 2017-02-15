import React, { Component } from 'react';

export default class UserDetails extends Component {
	
	constructor () {
		super()
		this.state = {newTag : ""}
	}

	handleAddTag(e) {
		const id = e.target.id
		console.log("new tag " + this.state.newTag)
		this.props.addTag(id, this.state.newTag)
	}

	handleChangeTag(e) {
		this.setState({newTag : e.target.value})
	}

  render() {

  	const userData = this.props.data
  	console.log(this.props)

    return (
		<div className="panel panel-default">
		  <div className="panel-body">
		  	<img src={userData.picture} className="img-circle" />
		  	<p>name: {userData.name}</p>
		  	<p>email: {userData.email}</p>
		  	<p>isActive: {userData.isActive.toString()}</p>
		  	<p>balance: {userData.balance}</p>
		  	<p>registered date: {userData.registered}</p>
		  	<p>company: {userData.company}</p>
		  	<p>phone: {userData.phone}</p>
		  	<ul>{userData.tags.map((tag, i) => <li key={i}>{tag}</li>)}</ul>
		  	<p>
			  	Add new tag <input onChange={this.handleChangeTag.bind(this)} />
			  	<button id={userData._id} onClick={this.handleAddTag.bind(this)}>submit</button>
		  	</p>
		  </div>
		</div>
    );
  }
}