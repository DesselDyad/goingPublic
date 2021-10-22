var mongoose = require('mongoose');

// Role Model
module.exports = mongoose.model('svendeRole', 
    mongoose.Schema({
        name: {
            type: String
        },
        display_name: {
            type: String
        }
    }),'svendeRoles'
)