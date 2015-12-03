var mongoose = require('mongoose');

var Artist = mongoose.model('Artist', new mongoose.Schema({
	name: String,
	birthdate: Date,
	status: String
}));

module.exports = Artist;