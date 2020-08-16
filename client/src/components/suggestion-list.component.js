import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Suggestion = props => (
	<tr>
		<td>{props.suggestion.game}</td>
		<td>{props.suggestion.description}</td>
		<td>{props.suggestion.steam_link}</td>
		<td>{props.suggestion.username}</td>
		<td>
			<Link to={"/edit/"+props.suggestion._id}>Edit</Link> | <a href="#" onClick={() => {props.deleteSuggestion(props.suggestion._id)}}>Delete</a>
		</td>
	</tr>
	)

export default class SuggestionList extends Component {
	constructor(props) {
		super(props);

		this.deleteSuggestion = this.deleteSuggestion.bind(this);
		this.suggestionList = this.suggestionList.bind(this);

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

	deleteSuggestion(id) {
		axios.delete('/api/suggestions/'+id)
			.then(res => console.log(res.data));
		this.setState({
			suggestions: this.state.suggestions.filter(el => el._id !== id)
		});
	}

	suggestionList() {
		return this.state.suggestions.map(currentSuggestion => {
			return <Suggestion suggestion={currentSuggestion} deleteSuggestion={this.deleteSuggestion} key={currentSuggestion._id} />
		});
	}

	render () {
		return (
			<div>
				<h3>Curent Game Suggestions</h3>
				<table className="table">
					<thead className="thead-light">
						<tr>
							<th>Game</th>
							<th>Description</th>
							<th>Steam Link</th>
							<th>Suggested by</th>
						</tr>
					</thead>
					<tbody>
						{this.suggestionList() }
					</tbody>
				</table>
			</div>
			);
	}
}