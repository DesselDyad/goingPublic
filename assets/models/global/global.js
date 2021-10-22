var mongoose = require('mongoose');

// Global Schema
module.exports = mongoose.model('Global', mongoose.Schema({
    unique_ips: {
        type: [],
        default: []
    },
    total_hits: {
        type: Number,
        default: 0
    }
}), 'global')