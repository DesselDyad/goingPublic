const User = require('../../../models/svende/user');
const Category = require('../../../models/svende/category');
const user = require('./user');
const Role = require('../../../models/svende/role');

/**
 * @module Editors
 */
module.exports = {
    /**
     * Gets a single editor based on req params id passed along from module
     * @returns {Object} - A single editor
     */
    getSingle: category => {
        return new Promise((resolve, reject) => {
            User.find({ 'category': category }, (err, editor) => {
                if (err) reject(err);
                else {
                    resolve(editor);
                }
            })
        })
    },
    /**
     * gets all editors
     * @returns {Object} - All editors sorted by category
     */
    getAll: () => {
        return new Promise((resolve, reject) => {
                // Role.insertMany([
                //     {"_id":"5bb223337082a85633da0ef6","name":"editor","display_name":"Redaktør"},
                //     {"_id":"5bb2233f7082a85633da0ef7","name":"admin","display_name":"Administrator"}
                // ], (err, roles) => {
                //     if(err) reject(err);
                //     else {
                //         resolve(roles);
                //     }
                // })
                // User.insertMany([
                //     {"_id":"5bb61319d7fdf31bf990f339",
                //     "username":"admin",
                //     "password":"$2a$10$8FO9wvNptWKdTqDfNvlptuqtn0najDWugbLRFCPCqClMOS8d0bK2a",
                //     "name":"Alex Faisst",
                //     "role":"5bb2233f7082a85633da0ef7",
                //     "email":"admin@bbbmag.dk",
                //     "profile_text":"Lorem Ipsum",
                //     "category":["5bb2216b7082a85633da0ef1",
                //     "5bb221637082a85633da0ef2",
                //     "5bb221637082a85633da0ef3"]},
                //     {"_id":"5bb7b1c80473001ac4792ffc","name":"Mikkel Mikkelsen","email":"mim@bbbmag.dk","profile_text":"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum","img":"mim.jpg","role":"5bb223337082a85633da0ef6","category":["5bb2216b7082a85633da0ef3"],"username":"mikkel","password":"$2a$10$eny7rqTa2lIM94sPTU/KxuLbr7DLs44W/18FVUKrXnXexrzopqzge"},
                //     {"_id":"5bb7b20bbec72e1bb0bf102c","name":"Hans Hansen","email":"hah@bbbmag.dk","profile_text":"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum","img":"hah.jpg","role":"5bb223337082a85633da0ef6","category":["5bb221637082a85633da0ef1"],"username":"hans","password":"$2a$10$fGxOlCtAW0XeGCsTTsgyS.1epkTQ1CZu8VmPyddqnPLVqK6N6Rrxi"},
                //     {"_id":"5bb7b25abec72e1bb0bf102d","name":"Jan Jensen","email":"jaj@bbbmag.dk","profile_text":"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum","img":"jaj.jpg","role":"5bb223337082a85633da0ef6","category":["5bb221637082a85633da0ef1"],"username":"jan","password":"$2a$10$2bAlh3w/oF02rzJ6PY6EP.Xo3OopgonRBkCmtYvl1Rl6ACQzeKpcq"},
                //     {"_id":"5bb7b2e50558781d63004172","name":"Carl Carlsen","email":"cac@bbbmag.dk","profile_text":"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum","img":"cac.jpg","role":"5bb223337082a85633da0ef6","category":["5bb221687082a85633da0ef2"],"username":"carl","password":"$2a$10$SGQs6gxe0VN6wixLiVO3I.M7T1EbpEtkqBP9uX.8vd33jPVz7Up7q"},
                //     {"_id":"5bb7b33d7706e01e53b84c4c","name":"Erik Eriksen","email":"ere@bbbmag.dk","profile_text":"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum","img":"ere.jpg","role":"5bb223337082a85633da0ef6","category":["5bb221687082a85633da0ef2"],"username":"erik","password":"$2a$10$ttEPT1Jgw8bopLBDLnhc9.PCppuNdd7uDmFsTFL71.5SEjlOILJFm"},
                //     {"_id":"5bb7b3867706e01e53b84c4d","name":"Lise Lissen","email":"lil@bbbmag.dk","profile_text":"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum","img":"lil.jpg","role":"5bb223337082a85633da0ef6","category":["5bb2216b7082a85633da0ef3"],"username":"lise","password":"$2a$10$J2wcPjulV963AHtG5TfqM.GjRY80tYg6prcaeQSKRuJ7SqdBAVeWe"},
                //     {"_id":"5bb8efb6acdc0723a6564ef3","category":["5bb221687082a85633da0ef2","5bb221637082a85633da0ef1","5bb2216b7082a85633da0ef3"],"name":"Lars Larsen","email":"lal@bbbmag.dk","profile_text":"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum","img":"profile.png","role":"5bb2233f7082a85633da0ef7","username":"lars","password":"$2a$10$Ito7YGkv2UqLOwPv9xL75eW4Ta.FWUHypsJufaF4X3bJLvQV5MNHy"}
                // ],(err, users) => {
                //     if(err) reject(err);
                //     else{
                //         resolve(users);
                //     }
                // })
            let final = [];
            //get all categories (cars, boats, bikes)
            Category.find({})
            //sort the results by category name
            .sort('editor_name')
            .exec()
            .then(async categories=> {
                //for each returned category, find the editors with the corresponding category
                for(let i = 0; i < categories.length; i++) {
                    //build an array with those returned users to be able to sort them according to category on frontend-editorial-page
                    final.push({
                        'category': categories[i].editor_name,
                        users: await user.getAllUsersByCategory(categories[i]._id)
                    });
                }
            })
            //once everything is done, resolve with the populated array
            .then(() => {
                resolve(final);
            })
            .catch(err => {
                reject(err);
            })
        })
    }
}