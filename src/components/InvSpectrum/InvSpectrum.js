import React, { Component } from 'react';
// import './InvSpectrum.css';


class InvSpectrum extends Component {
	
	constructor(props) {
		super(props);

		this.state = {};
		this.submitQuestionaire = this.submitQuestionaire.bind(this);
	}


	submitQuestionaire () {
		console.log("Submit Button Clicked");
		this.props.history.push('/MyPortfolio/MyPortfolio');
	}

	render() {
		return(
			<div>
				<h1>Investor Spectrum</h1>	
				<button onClick={this.submitQuestionaire} className="btn btn-danger">Submit</button>
			</div>
	);
  }
}

export default InvSpectrum;