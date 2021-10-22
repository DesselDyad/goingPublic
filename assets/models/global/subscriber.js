var mongoose = require('mongoose');

// Role Schema
module.exports = mongoose.model('Subscriber', mongoose.Schema({
	name: {
		type: String,
		index:true
	},
	email: {
		type: String
	}
}))