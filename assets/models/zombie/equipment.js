var mongoose = require('mongoose');

// Role Schema
module.exports = mongoose.model('Equipment', mongoose.Schema({
    img: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'EquipmentCategory'
    }

}), 'equipment')