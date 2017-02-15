import React, { Component } from 'react';
import TagDetails from '../components/TagDetails.js'


export default class Tag extends Component {
  render() {

  	const userData = this.props.route.data
  	//calculate required data from userData
  	var tagData = {}
  	userData.forEach((user) => {
  		user.tags.forEach((tag) => {
  			if (tagData[tag] === undefined) {
  				tagData[tag] = {
  					userCount : 0,
  					balance : 0
  				}
  			} 
  			tagData[tag].userCount++
  			tagData[tag].balance += Number(user.balance.replace(/[^0-9\.]+/g,""))
  		})

  	})

  	const tagPanels = []

    for(var key in tagData) {
	    if(tagData.hasOwnProperty(key)) {
	    	const tempTag = {
				"tagName" : key,
				"userCount" : tagData[key].userCount,
				"balance" : tagData[key].balance,
			}
	        tagPanels.push(
				<TagDetails key={key} data={tempTag}/>
	        )
	    }
	}

    return (
      <div className="row">
        <div className="col-md-offset-2 col-md-4">
          <h1>Tag Page</h1>
          {tagPanels}
        </div>
      </div>
    );
  }
}