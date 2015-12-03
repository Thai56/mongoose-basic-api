var Artist = require('../models/Artist');

module.exports = {
	getArtists: function(req, res) {
		Artist
		.find(req.query)
		.exec()
		.then(function(artists) {
			return res.json(artists);
		});
	},
	getArtist: function(req, res) {
		Artist
		.findOne({_id: req.params.id})
		.exec()
		.then(function(artist) {
			return res.json(artist);
		});
	},
	updateArtist: function(req, res) {
		Artist.update({_id: req.params.id}, req.body).then(function() {
			return res.status(200).end();
		});
	},
	createArtist: function(req, res) {
		var artist = new Artist(req.body);
		artist.save().then(function(err, result) {
			return res.status(201).end();
		});
	},
	removeArtist: function(req, res) {
		Artist.remove({_id:  req.params.id}).then(function(result) {
			return res.status(200).end();
		});
	},
};