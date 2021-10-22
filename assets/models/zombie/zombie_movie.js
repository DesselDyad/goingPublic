var mongoose = require('mongoose');

// Role Schema
module.exports = mongoose.model('ZombieMovie', mongoose.Schema({
    title: {
        type: String
    },
    director: {
        type: String
    },
    year: {
        type: String
    },
    notes: {
        type: String
    }

}), 'zombie_movies')