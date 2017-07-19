import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MyPortfolio.css';
import firebase from '../../config/constants.js';
	
class MyPortfolio extends Component {
constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    }
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }
  
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  submitMyPortfolio () {
		console.log("Submit Button Clicked");
		this.props.history.push('/Suitability/Suitability');
  }

// // Click event to move stock to portfolio
// $(document).on("click", ".movetoportfolio", function() {
//   var thisId = $(this).attr("data-id");
//   $.ajax({
//     type: "GET",
//     url: "/movetoportfolio/" + thisId
//   });
//   $(this).parents("span").remove();
//   getPortfolio();
// });

// // Click event to move stock to watchlist
// $(document).on("click", ".movetowatchlist", function() {
//   var thisId = $(this).attr("data-id");
//   $.ajax({
//     type: "GET",
//     url: "/movetowatchlist/" + thisId
//   });
//   $(this).parents("span").remove();
//   getWatchlist();
// });

// // Load watchlist and render them to the screen
// function getWatchlist() {
//   $("#watchlist").empty();
//   $.getJSON("/watchlist", function(data) {
//     for (var i = 0; i < data.length; i++) {
//       $("#watchlist").prepend("<span class='tiles'><tr><th><button class='movetoportfolio' data-id='" + data[i]._id + "'><img class='default-img' src='images/" + data[i].brand + "' style='width:100px;height:100px;''></th><br><th>" + data[i].company + "</th><br><th><p class='tickname'>" + data[i].ticker +
//         "</p></button></th></tr></span>");
//     }
//     $("#watchlist").prepend("<center><h2>On the Bench</h2></center><hr>");
//   });
// }

// // Load portfolio stocks and render them to the screen
// function getPortfolio() {
//   $("#portfolio").empty();
//   $.getJSON("/portfolio", function(data) {
//     for (var i = 0; i < data.length; i++) {
//       $("#portfolio").prepend("<span class='tiles'><tr><th><button class='movetowatchlist' data-id='" + data[i]._id + "'><img class='default-img' src='images/" + data[i].brand + "' style='width:100px;height:100px;''></th><br><th>" + data[i].company + "</th><br><th><p class='tickname'>" + data[i].ticker +
//         "</p></button></th></tr></span>");
//     }
//     $("#portfolio").prepend("<center><h2>My Lineup (Max 20)</h2></center><hr>");
//     $("#portfolio").append("<hr><p><center><button type='submit' id='userstock' class='userstock-btn'>Submit</button></center></p>");
//   });
// }


	render() {
		return(
		  <div className="picklist">
			<div className="row">
					<section className="col-md-10"></section>
					<section className="col-md-2 searchBar">
						<span className="glyphicon glyphicon-search"> Search			      
						</span>
				<form onSubmit={this.handleSubmit} className="form-inline">
                  <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" name="currentItem" placeholder="Company Name" onChange={this.handleChange} value={this.state.currentItem} />
                  <input type="text" class="form-control" name="username" placeholder="Ticker" onChange={this.handleChange} value={this.state.username} />
                  <button className="search-btn">Search</button>
                </form>
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
			 	        <div className="wrapper">
			                <span className="tile">
			                  {this.state.items.map((item) => {
			                    return (
			                      <span className="tile-contents" key={item.id}>
			                        <h3>{item.title}</h3>
			                        <p>{item.user} ___  
			                          <button onClick={() => this.removeItem(item.id)} className="btn btn-warning">X</button>
			                        </p>
			                      </span>
			                    )
			                  })}
			                </span>
              			</div>
			        </section>
			</div>
		  </div>
	);
  }
}

export default MyPortfolio;