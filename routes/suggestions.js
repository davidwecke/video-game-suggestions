const router = require('express').Router();
let Suggestion = require('../models/suggestion.model');

router.route('/').get((req,res) => {
	Suggestion.find()
		.then(suggestions => res.json(suggestions))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const game = req.body.game;
	const description = req.body.description;
	const steam_link = req.body.steam_link;
	const suggestor = req.body.suggestor;
	const verified = req.body.verified;

	const newSuggestion = new Suggestion({
		game,
		description,
		steam_link,
		suggestor,
		verified
	});

	newSuggestion.save()
		.then(() => res.json('Suggestion added!'))
		.catch(err => res.status(400).json('Error' + err));
});

router.route('/:id').get((req,res) => {
	Exercise.findById(req.params.id)
		.then(suggestion => res.json(suggestion))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
	Exercise.findByIdAndDelete(req.params.id)
		.then(() => res.json('Suggestion Deleted.'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
	Exercise.findById(req.params.id)
		.then(suggestion => {
			suggestion.game = req.body.game;
			suggestion.description = req.body.game;
			suggestion.steam_link = req.body.steam_link;
			suggestion.suggestor = req.body.suggestor;
			suggestion.verified = req.body.verified;

			suggestion.save()
				.then(() => res.json('Suggestion Updated!'))
				.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;