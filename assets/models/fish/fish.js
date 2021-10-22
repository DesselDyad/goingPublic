var mongoose = require('mongoose');

// Global Schema
module.exports = mongoose.model('Fish', mongoose.Schema({
    species: {
        type: mongoose.Schema.Types.ObjectId, ref:'Species'
    },
    location: {
        type: mongoose.Schema.Types.ObjectId, ref:'Location'
    },
    caught_by: {
        type: mongoose.Schema.Types.ObjectId, ref:'User'
    },
    date_caught: {
        type: String,
        default: new Date().toLocaleString('en-GB', {timeZone: 'GMT'})
    },
    weight: {
        type: Number
    },
    description: {
        type: String
    },
    external_ref: {
        type: String
    },
    images: {
        type: [
            {
                type: String
            }
        ],
        default: [
                'no-image.png'
        ]
    }
}), 'fish')