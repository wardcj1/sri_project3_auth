import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Suitability extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.submitSuitability = this.submitSuitability.bind(this);
	}

	// constructor(props) {
	// 	super(props);
	// 	this.state = {};
	// 	this.backMyPortfolio = this.backMyPortfolio.bind(this);
	// }

	submitSuitability () {
		console.log("Submit Button Clicked");
		this.props.history.push('/Recommendation/Recommendation');
	}

	// backMyPortfolio () {
	// 	console.log("Back Button Clicked");
	// 	this.props.history.push('/MyPortfolio/MyPortfolio');
	// }

	render() {
		return(
			<div>
				<h1>Suitability</h1>
				<Link to="/MyPortfolio" className="btn btn-primary">back</Link>
				<br/>
				<hr/>
				<button onClick={this.submitSuitability} className="btn btn-danger">Submit</button>
			</div>
	);
  }

 /*	constructor(props) {
		super(props);
		this.state = {};
		this.backMyPortfolio = this.backMyPortfolio.bind(this);
	}


	backMyPortfolio () {
		console.log("Back Button Clicked");
		this.props.history.push('/MyPortfolio/MyPortfolio');
	}

	render() {
		return(
			<div>
				<button onClick={this.backMyPortfolio}><<Back</button>
			</div>
	);
  }
*/
}

export default Suitability;