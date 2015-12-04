var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');

var Song = require('./models/Song');
var SongController = require('./controllers/SongController');
var ArtistController = require('./controllers/ArtistController');

var app = express();
app.use(bodyParser.json());

app.post('/api/songs', SongController.createSong);
app.get('/api/songs', SongController.getSongs);
app.get('/api/songs/:id', SongController.getSong);
app.post('/api/songs/:id/artists', SongController.addArtist);
app.put('/api/songs/:id', SongController.updateSong);
app.delete('/api/songs/:id', SongController.removeSong);

app.post('/api/artists', ArtistController.createArtist);
app.get('/api/artists', ArtistController.getArtists);
app.get('/api/artists/:id', ArtistController.getArtist);
app.put('/api/artists/:id', ArtistController.updateArtist);
app.delete('/api/artists/:id', ArtistController.removeArtist);


app.listen(8888);

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring = process.env.MONGOLAB_URI || 'mongodb://localhost/musicstore';

mongoose.connect(uristring);






