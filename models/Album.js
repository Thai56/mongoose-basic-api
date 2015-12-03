var mongoose = require('mongoose');

var iTunesInfo = require('./iTunesInfo');

var Album = mongoose.model('Album', new mongoose.Schema({
	title: String,
	itunes_info: iTunesInfo.schema
}));

module.exports = Album;