var mongoose = require('mongoose');

var iTunesInfo = require('./iTunesInfo');

var Song = mongoose.model('Song', new mongoose.Schema({
	title: String,
	album: String,
	track_number: Number,
	artists: [{
		type: String,
		ref: 'Artist'
	}],
	itunes_info: iTunesInfo.schema,
	explicit: {type: Boolean, required: true},
	release_date: {type: Date, default: Date.now},
	genres: [],
}));

module.exports = Song;