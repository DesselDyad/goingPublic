var mongoose = require('mongoose');

// Role Schema
module.exports = mongoose.model('Temporary_Password', mongoose.Schema({
	email: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	created: {
		type: String
	}
}))