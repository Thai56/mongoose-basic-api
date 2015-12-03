var mongoose = require('mongoose');

var iTunesInfo = mongoose.model('iTunesInfo', new mongoose.Schema({
	sku: String,
	price: Number
}));

module.exports = iTunesInfo;