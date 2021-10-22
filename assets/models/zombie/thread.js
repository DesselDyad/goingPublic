var mongoose = require('mongoose');

// Role Schema
module.exports = mongoose.model('Thread', mongoose.Schema({
    title: {
        type: String
    },
    posts: {
        type: [
            { type: mongoose.Schema.Types.ObjectId, ref:'Post' }
        ],
        default: []
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId, ref:'User'
    },
    created: {
        type: String,
        default: new Date().toLocaleString('en-GB', {timeZone: 'GMT'})
    },
    lastUpdate: {
        type: mongoose.Schema.Types.ObjectId, ref:'Post'
    }
}), 'threads')