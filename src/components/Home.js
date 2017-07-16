import React, { Component } from 'react';
// import './Home.css';


class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.submitStart = this.submitStart.bind(this);
	}


	submitStart () {
		console.log("Submit Button Clicked");
		this.props.history.push('/InvSpectrum/InvSpectrum');
	}

	render() {
		return(
			<div>
				<h1>Home</h1>	
				<button onClick={this.submitStart} className="btn btn-danger">Start</button>
			</div>
	);
  }
}

export default Home;