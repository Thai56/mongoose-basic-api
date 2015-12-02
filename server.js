var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');

var Song = require('./models/Song');
var SongController = require('./controllers/SongController');

var app = express();
app.use(bodyParser.json());

app.post('/api/songs', SongController.createSong);
app.get('/api/songs', SongController.getSongs);
app.get('/api/songs/:id', SongController.getSong);
app.put('/api/songs/:id', SongController.updateSong);
app.delete('/api/songs/:id', SongController.removeSong);

app.listen(8888);

mongoose.connect('mongodb://localhost/musicstore');