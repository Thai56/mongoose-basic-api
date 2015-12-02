var mongoose = require('mongoose');

var Song = mongoose.model('Song', new mongoose.Schema({
	title: String,
	album: String,
	track_number: Number,
	artist: {
		name: String,
		birthdate: Date
	},
	explicit: {type: Boolean, required: true},
	release_date: {type: Date, default: Date.now},
	genres: [],
}));

module.exports = Song;