import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MyPortfolio.css';



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
			<div className="row">
					<section className="col-md-10"></section>
					<section className="col-md-2 searchBar">
						<span className="glyphicon glyphicon-search"> Search
						      <button type="submit" id="addstock" className="search-btn">Search</button>
						</span>
					</section>
			<hr />
			</div>
			<div className="row">
			        <section className="col-md-4 portfolio">
				        <center><h1>My Portfolio</h1></center>
				        <hr />


				        <hr />
				        <center>
				        <Link to="/Suitability" className="userstock-btn">Submit</Link>
				        </center>
			        </section>
			        <section className="col-md-1"></section>
			        <section className="col-md-7 watchlist">
			 	        <center><h1>Watchlist</h1></center>
			 	        <hr />
			        </section>
			</div>
		  </div>
	);
  }
}

export default MyPortfolio;