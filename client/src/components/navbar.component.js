import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
	constructor(props) {
	    super(props);
	    this.toggleNavbar = this.toggleNavbar.bind(this);
	    this.state = {
	      collapsed: true,
	    };
	  }
	  toggleNavbar() {
	    this.setState({
	      collapsed: !this.state.collapsed,
	    });
	  }
	render() {
		const collapsed = this.state.collapsed;
	    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
	    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
		return ( 
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to="/"> Toblo's Stuff</Link>
				<button  onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    				<span className="navbar-toggler-icon"></span>
  				</button>

  				<div className={`${classOne}`} id="navbarNav">
  					<ul className="navbar-nav">
  						<li className="nav-item">
  							<Link className="nav-link" to="/">Game Suggestion List</Link>
  						</li>
  						<li className="nav-item">
  							<Link className="nav-link" to="/create">Suggest a Game</Link>
  						</li>
  						<li className="nav-item">
  							<Link className="nav-link" to="/user">Create User</Link>
  						</li>
  					</ul>
  				</div>
			</nav>

		);
	}
}