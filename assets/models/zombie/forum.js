var mongoose = require('mongoose');

// Role Schema
module.exports = mongoose.model('Forum', mongoose.Schema({
	title: {
		type: String,
		index:true
	},
    sub_forums: {
        type: [
            { type: mongoose.Schema.Types.ObjectId, ref: 'SubForum' }
        ]
    }
}), 'forums')