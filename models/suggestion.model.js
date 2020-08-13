const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const suggestionSchema = new Schema({
	game: {type: String, required: true},
	description: {type: String, required: true},
	steam_link: {type: String, required: false},
	suggestor: {type: String, required: false},
	verified: {type: Boolean, required: true},
}, {
	timestamps: true,
});

const Suggestion = mongoose.model('Suggestion', suggestionSchema);

module.exports = Suggestion;