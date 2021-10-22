var mongoose = require('mongoose');

// Role Schema
module.exports = mongoose.model('Role', mongoose.Schema({
	name: {
		type: String,
		index:true
	}
}))