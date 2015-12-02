var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');

var Song = require('./models/Song');

var app = express();
app.use(bodyParser.json());

app.post('/api/songs', function(req, res) {
	var song = new Song(req.body);
	song.save().then(function(err, result) {
		return res.status(201).end();
	});
});

app.get('/api/songs', function(req, res) {
	Song
	.find(req.query)
	.exec()
	.then(function(songs) {
		return res.json(songs);
	});
});

app.get('/api/songs/:id', function(req, res) {
	Song
	.findOne({_id: req.params.id})
	.exec()
	.then(function(song) {
		return res.json(song);
	});
});

app.put('/api/songs/:id', function(req, res) {
	Song.update({_id: req.params.id}, req.body).then(function() {
		return res.status(200).end();
	});
});

app.delete('/api/songs/:id', function(req, res) {
	Song.remove({_id:  req.params.id}).then(function(result) {
		return res.status(200).end();
	});
});

app.listen(8888);

mongoose.connect('mongodb://localhost/musicstore');