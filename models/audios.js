var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var audiosSchema = new Schema({
	name: String,
	url: String
});

mongoose.model('audios', audiosSchema)