#!/usr/bin/env node --harmony

'use strict';
var express = require('express');
var bodyParser = require('body-parser'); // this allows us to pass JSON values to the server (see app.put below)
var app = express();
var mongoose = require('mongoose'); //new
var uriUtil = require('mongodb-uri');
var fs = require('fs');

// serve static content from the public folder 
app.use("/", express.static(__dirname + '/public'));
mongoose.set("debug", true);

// parse the bodies of all other queries as json
app.use(bodyParser.json());
// log the requests
app.use(function(req, res, next) {
    console.log('%s %s %s', req.method, req.url, JSON.stringify(req.body));
    next();
});

var mongodbUri= "mongodb://leiner.cs-i.brandeis.edu:27017/rose"; 
var mongooseUri= uriUtil.formatMongoose(mongodbUri);
var Schema = mongoose.Schema;
var pieceSchema = new Schema ({
    piece_basics: {
        title: String,
        year: Number,
        artist: String
        },
    piece_details: {
        audio_on_load: String,
        medium: String,
        style: String,
        summary: String
        },
    artist_details: {
        audio_on_load: String,
        biography: String,
        career: String
        },
    categories: [String, String]
});
var Piece = mongoose.model('pieces', pieceSchema)

mongoose.connect(mongooseUri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback (){
    console.log("db connection");
})

fs.readdirSync(__dirname + '/models').forEach(function(filename){
    if(~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});


app.get('/pieces', function(req, res){
    alert("yes")
    Piece.find(function(err, pieces){
        res.send(pieces);
    });
});

app.get('/pieces/:id', function(req,res) {
   mongoose.model('pieces').findById(req.params.id, function(err, pieces) {
       res.send(pieces);
        
   }); 
});

app.put('/pieces/:id', function(req, res) {
   mongoose.model('pieces').findByIdAndUpdate(req.params.id, req.body, function(err, pieces){
    res.send(pieces);
    });
});

app.post('/pieces', function(req, res) {
    var temp = new Piece(req.body)
    temp.save(function(err, saved){
        if(err){
            console.log(err);
        }
        console.dir(temp)
    })
});

app.delete('/pieces/:id', function(req, res) {
   mongoose.model('pieces').findByIdAndRemove(req.params.id, function(err, pieces){   
    res.send(pieces);
    });
});

app.listen(process.env.PORT || 9000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
