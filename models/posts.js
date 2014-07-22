var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postsSchema = new Schema({
	conent: String,
	user: {
		type: Schema.ObjectId,
		ref: 'users'
	}
});

mongoose.model('posts', postsSchema)