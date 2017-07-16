import React, { Component } from 'react';

class MyPortfolio extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.submitMyPortfolio = this.submitMyPortfolio.bind(this);
	}


	submitMyPortfolio () {
		console.log("Submit Button Clicked");
		this.props.history.push('/Suitability/Suitability');
	}

	render() {
		return(
			<div>
				<h1>My Portfolio and Watchlist</h1>	
				<button onClick={this.submitMyPortfolio} className="btn btn-danger">Submit</button>
			</div>
	);
  }
}

export default MyPortfolio;