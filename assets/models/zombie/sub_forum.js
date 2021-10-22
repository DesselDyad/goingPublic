var mongoose = require('mongoose');

// Role Schema
module.exports = mongoose.model('SubForum', mongoose.Schema({
    title: {
        type: String
    },
    threads: {
        type: [
            { type: mongoose.Schema.Types.ObjectId, ref:'Thread' }
        ],
        default: []
    },
    lastUpdate: {
        post: {
            type: mongoose.Schema.Types.ObjectId, ref:'Post'
        },
        thread: {
            type: mongoose.Schema.Types.ObjectId, ref:'Thread'
        }
    }
}), 'sub_forums')