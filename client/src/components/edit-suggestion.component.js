import React, {Component} from 'react';
import axios from 'axios';

export default class EditSuggestion extends Component {
	constructor(props) {
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeGame = this.onChangeGame.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeVerified = this.onChangeVerified.bind(this);
		this.onChangeSteamLink = this.onChangeSteamLink.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			game: '',
			description: '',
			steam_link: '',
			suggestor: '',
			verified: false,
			users: []
		}
	}

	componentDidMount() {
		axios.get('/api/suggestions'+this.props.match.params.id)
			.then(response => {
				this.setState({
				game: response.data.game,
				description: response.data.description,
				steam_link: response.data.steam_link,
				suggestor: response.data.suggestor,
				verified: response.data.verified,
				users: []
				});
			});
		axios.get('/api/users/')
			.then(response => {
				if (response.data.length > 0) {
					this.setState({
						users: response.data.map(user => user.username),
					})
				}
			})
	}

	onChangeUsername(event) {
		this.setState({
			username: event.target.value
		});
	}

	onChangeGame(event) {
		this.setState({
			game: event.target.value
		});
	}

	onChangeDescription(event) {
		this.setState({
			description: event.target.value
		});
	}

	onChangeSteamLink(event) {
		this.setState({
			steam_link: event.target.value
		});
	}

	onChangeVerified(event) {
		this.setState({
			verified: event.target.value
		});
	}

	onSubmit(event) {
		event.preventDefault();

		const suggestion = {
			suggestor: this.state.username,
			game: this.state.game,
			description: this.state.description,
			steam_link: this.state.steam_link,
			verified: this.state.verified
		}

		console.log(suggestion);

		axios.post('/api/suggestions/update/'+this.props.match.params.id, suggestion)
			.then(res => console.log(res.data));

		window.location = '/';
	}

	render () {
		return (
			<div>
				<h3>Edit a Game Suggestion</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Username: </label>
						<select ref="userInput"
							required
							className="form-control"
							value={this.state.username}
							onChange={this.onChangeUsername}>
							{
								this.state.users.map(function(user) {
									return <option 
										key={user}
										value={user}>{user}
										</option>
								})
							}

						</select>
					</div>
					<div className="form-group">
						<label>Game Title</label>
						<input type="text"
							required
							className="form-control"
							value={this.state.game}
							onChange={this.onChangeGame} />
					</div>
					<div className="form-group">
						<label>Description</label>
						<input type="text"
							required
							className="form-control"
							value={this.state.description}
							onChange={this.onChangeDescription} />
					</div>
					<div className="form-group">
						<label>Steam Link</label>
						<input type="text"
							className="form-control"
							value={this.state.steam_link}
							onChange={this.onChangeSteamLink} />
					</div>
					<div className="form-group">
						<label>Your Username</label>
						<input type="text"
							className="form-control"
							value={this.state.username}
							onChange={this.onChangeUsername} />
					</div>
					<div className="form-group">
						<input type="submit" value="Edit Game" className="btn btn-primary" />
					</div>
				</form>
			</div>
		);
	}
}