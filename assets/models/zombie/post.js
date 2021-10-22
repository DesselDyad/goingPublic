var mongoose = require('mongoose');

// Role Schema
module.exports = mongoose.model('Post', mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId, ref:'User'
    },
    content: {
        type: String
    },
    created: {
        type: String,
        default: new Date().toLocaleString('en-GB', {timeZone: 'GMT'})
    }
}), 'posts')