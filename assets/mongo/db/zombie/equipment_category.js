const EquipmentCategory = require('../../../models/zombie/equipment_category');
const Equipment = require('../../../models/zombie/equipment');

module.exports = {
    getSingle: id => {
        return new Promise((resolve, reject) => {
            EquipmentCategory.find({ _id: id })
                .exec()
                .then(categoriy => {
                    resolve(categoriy)
                })
                .catch(e => {
                    reject(e);
                })
        })
    },
    getAll: () => {
        return new Promise((resolve, reject) => {
            EquipmentCategory.find({})
                .exec()
                .then(categories => {
                    resolve(categories)
                })
                .catch(e => {
                    reject(e);
                })
        })
    },
    getEquipmentByCategory: id => {
        return new Promise((resolve, reject) => {
            Equipment.find({ category: id })
                .populate('category')
                .exec()
                .then(equipment => {
                    resolve(equipment)
                })
                .catch(e => {
                    reject(e)
                })
        })
    }
}