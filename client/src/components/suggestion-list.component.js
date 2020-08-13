import React, {Component} from 'react';

import axios from 'axios';

export default class SuggestionList extends Component {
	constructor(props) {
		super(props);

		

		this.state={suggestions: []};
	}

	componentDidMount() {
		axios.get('/api/suggestions/')
			.then( response => {
				this.setState({suggestions : response.data})
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render () {
		return (
			<div>
				<p>You are on the Suggestion List component!</p>
			</div>
			);
	}
}