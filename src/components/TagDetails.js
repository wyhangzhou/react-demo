import React, { Component } from 'react';

export default class TagDetails extends Component {

  render() {

  	const tagData = this.props.data

  	console.log(tagData)

    return (
		<div className="panel panel-default">
		  <div className="panel-body" >
		  	<p>TagName: {tagData.tagName}</p>
		  	<p>UserCount: {tagData.userCount}</p>
		  	<p>balanceTotal: ${tagData.balance.toFixed(2)}</p>
		  </div>
		</div>
    );
  }
}