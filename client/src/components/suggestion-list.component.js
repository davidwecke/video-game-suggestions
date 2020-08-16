import React, {Component} from 'react';
import axios from 'axios';

export default class SuggestionList extends Component {
	constructor(props) {
		super(props);

		this.state={suggestions: []};
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
					</tbody>
				</table>
			</div>
			);
	}
}