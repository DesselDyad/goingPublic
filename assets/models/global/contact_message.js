var mongoose = require('mongoose');

// Role Schema
module.exports = mongoose.model('Contact_Message', mongoose.Schema({
	sender_name: {
		type: String,
		index:true
    },
    sender_username: {
        type: String
    },
    sender_email: {
        type: String
    }, 
    receiver: {
        type: String
    },
    subject: {
        type: String
    },
    message: {
        type: String
    },
    sent: {
        type: String
    }
}))