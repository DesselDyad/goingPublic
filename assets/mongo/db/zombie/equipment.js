const EquipmentCategory = require('../../../models/zombie/equipment_category');
const Equipment = require('../../../models/zombie/equipment');
const mongoose = require('mongoose');
const equipment_category = require('./equipment_category');

module.exports = {
    getSingle: id => {
        return new Promise((resolve, reject) => {
            Equipment.find({_id:id})
            .exec()
            .then(equipment => {
                resolve(equipment)
            })
            .catch(e => {
                reject(e);
            })
        })
    },
    getAll: () => {
        return new Promise((resolve, reject) => {
            let final = [];
            EquipmentCategory.find({})
            .exec()
            .then(async categories => {
                for(let i = 0;  i< categories.length; i++) {
                    final.push({
                        'category': categories[i],
                        'equipment': await equipment_category.getEquipmentByCategory(categories[i]._id)
                    })
                }
            })
            .then(() => {
                resolve(final);
            })
            .catch(e => {
                reject(e);
            })
        })
    }
 }