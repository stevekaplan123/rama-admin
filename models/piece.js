var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pieceSchema = new Schema({
	/*title: String,
	audio_on_load: String,
	image_on_load: String,
	categories: [String, String],
	artist_info: {
		audio_on_load: String,
		biography: String,
		career: String
	},
	piece_info: {
		audio_on_load: String,
		medium: String,
		style: String
	}*/
	hello: String
})

mongoose.model('piece', pieceSchema)