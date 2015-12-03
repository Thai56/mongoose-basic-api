var Song = require('../models/Song');

module.exports = {
	getSongs: function(req, res) {
		Song
		.find(req.query)
		.populate('artists')
		.exec()
		.then(function(songs) {
			return res.json(songs);
		});
	},
	getSong: function(req, res) {
		Song
		.findOne({_id: req.params.id})
		.exec()
		.then(function(song) {
			return res.json(song);
		});
	},
	addArtist: function(req, res) {
		Song.
		findOne({_id: req.params.id})
		.exec()
		.then(function(song) {
			song.artists.push(req.body.artist);
			song.save().then(function() {
				return res.status(201).end();
			});
		});
	},
	updateSong: function(req, res) {
		Song.update({_id: req.params.id}, req.body).then(function() {
			return res.status(200).end();
		});
	},
	createSong: function(req, res) {
		var song = new Song(req.body);
		song.save().then(function(err, result) {
			return res.status(201).end();
		});
	},
	removeSong: function(req, res) {
		Song.remove({_id:  req.params.id}).then(function(result) {
			return res.status(200).end();
		});
	},
};