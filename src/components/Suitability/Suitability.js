import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Suitability extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.submitSuitability = this.submitSuitability.bind(this);
	}

	submitSuitability () {
		console.log("Submit Button Clicked");
		this.props.history.push('/Recommendation/Recommendation');
	}

	render() {
		return(
			<div>
				<h1>Suitability</h1>
				<Link to="/MyPortfolio" className="btn btn-primary">Go back</Link>
				<br/>
				<hr/>
				<button onClick={this.submitSuitability} className="btn btn-danger">Submit</button>
			</div>
	);
  }
}

export default Suitability;