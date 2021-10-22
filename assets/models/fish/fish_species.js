var mongoose = require('mongoose');

// Global Schema
module.exports = mongoose.model('Species', mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    external_ref: {
        type: String
    },
    images: {
        type: [{
            type: String
        }],
        default: ['no-image.png']
    }
}), 'species')