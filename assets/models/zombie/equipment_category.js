var mongoose = require('mongoose');

// Role Schema
module.exports = mongoose.model('EquipmentCategory', mongoose.Schema({
    name: {
        type: String
    },
    icon_class: {
        type: String
    }

}), 'equipment_categories')