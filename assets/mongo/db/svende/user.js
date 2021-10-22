const User = require('../../../models/svende/user');
const Role = require('../../../models/global/role');
const security = require('../../../services/security');

/**
 * @module User
 */

module.exports = {
    /**
     * gets a single user by id
     * @param id - the id by which to get the user
     * @returns {Object} - the queried user
     */
    getSingle: id => {
        return new Promise((resolve, reject) => {
            User.find({_id:id})
            .populate([
                {path: 'category'},
                {path: 'role'}
            ])
            .exec()
            .then(user => {
                resolve(user);
            })
            .catch(e => {
                reject(e);
            })
        })
    },
    /**
     * gets all users
     * @param id - the id by which to get the user
     * @returns {Object} - the queried user
     */
    getAll: () => {
        return new Promise((resolve, reject) => {
            User.find({})
            .populate([{path: 'category'},{path: 'role'}])
            .exec()
            .then(users => {
                resolve(users);
            })
            .catch(e => {
                reject(e);
            })
            /**
             * User.insertMany([
                        {"_id":"5bb61319d7fdf31bf990f339",
                        "username":"admin",
                        "password":"$2a$10$8FO9wvNptWKdTqDfNvlptuqtn0najDWugbLRFCPCqClMOS8d0bK2a",
                        "name":"Alex Faisst",
                        "role":"5bb2233f7082a85633da0ef7",
                        "email":"admin@bbbmag.dk",
                        "profile_text":"Lorem Ipsum",
                        "category":["5bb2216b7082a85633da0ef1",
                        "5bb221637082a85633da0ef2",
                        "5bb221637082a85633da0ef3"]},
                        {"_id":"5bb7b1c80473001ac4792ffc","name":"Mikkel Mikkelsen","email":"mim@bbbmag.dk","profile_text":"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum","img":"mim.jpg","role":"5bb223337082a85633da0ef6","category":["5bb2216b7082a85633da0ef3"],"username":"mikkel","password":"$2a$10$eny7rqTa2lIM94sPTU/KxuLbr7DLs44W/18FVUKrXnXexrzopqzge"},
                        {"_id":"5bb7b20bbec72e1bb0bf102c","name":"Hans Hansen","email":"hah@bbbmag.dk","profile_text":"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum","img":"hah.jpg","role":"5bb223337082a85633da0ef6","category":["5bb221637082a85633da0ef1"],"username":"hans","password":"$2a$10$fGxOlCtAW0XeGCsTTsgyS.1epkTQ1CZu8VmPyddqnPLVqK6N6Rrxi"},
                        {"_id":"5bb7b25abec72e1bb0bf102d","name":"Jan Jensen","email":"jaj@bbbmag.dk","profile_text":"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum","img":"jaj.jpg","role":"5bb223337082a85633da0ef6","category":["5bb221637082a85633da0ef1"],"username":"jan","password":"$2a$10$2bAlh3w/oF02rzJ6PY6EP.Xo3OopgonRBkCmtYvl1Rl6ACQzeKpcq"},
                        {"_id":"5bb7b2e50558781d63004172","name":"Carl Carlsen","email":"cac@bbbmag.dk","profile_text":"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum","img":"cac.jpg","role":"5bb223337082a85633da0ef6","category":["5bb221687082a85633da0ef2"],"username":"carl","password":"$2a$10$SGQs6gxe0VN6wixLiVO3I.M7T1EbpEtkqBP9uX.8vd33jPVz7Up7q"},
                        {"_id":"5bb7b33d7706e01e53b84c4c","name":"Erik Eriksen","email":"ere@bbbmag.dk","profile_text":"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum","img":"ere.jpg","role":"5bb223337082a85633da0ef6","category":["5bb221687082a85633da0ef2"],"username":"erik","password":"$2a$10$ttEPT1Jgw8bopLBDLnhc9.PCppuNdd7uDmFsTFL71.5SEjlOILJFm"},
                        {"_id":"5bb7b3867706e01e53b84c4d","name":"Lise Lissen","email":"lil@bbbmag.dk","profile_text":"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum","img":"lil.jpg","role":"5bb223337082a85633da0ef6","category":["5bb2216b7082a85633da0ef3"],"username":"lise","password":"$2a$10$J2wcPjulV963AHtG5TfqM.GjRY80tYg6prcaeQSKRuJ7SqdBAVeWe"},
                        {"_id":"5bb8efb6acdc0723a6564ef3","category":["5bb221687082a85633da0ef2","5bb221637082a85633da0ef1","5bb2216b7082a85633da0ef3"],"name":"Lars Larsen","email":"lal@bbbmag.dk","profile_text":"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum","img":"profile.png","role":"5bb2233f7082a85633da0ef7","username":"lars","password":"$2a$10$Ito7YGkv2UqLOwPv9xL75eW4Ta.FWUHypsJufaF4X3bJLvQV5MNHy"}
                ],(err, users) => {
                    if(err) reject(err);
                    else{
                        resolve(users);
                    }
                })
             */
        })
    },
    /**
     * gets all users with a certain role
     * @param role_id - the role id by which to get the user
     * @returns {Object} - the queried user
     */
    getUserRole: role_id => {
        return new Promise((resolve, reject) => {
            Role.find({
                _id: role_id
            })
            .select('name')
            .exec()
            .then(role => {
                resolve(role[0].name);
            })
            .catch(e => {
                reject(e);
            })
        })
    },
    /**
     * gets all editors (or rather, all users, since admin user technically also is an editor - can be filtered further in EJS)
     * @returns {Object} - the queried users
     */
    getAllEditors: () => {
        return new Promise((resolve, reject) => {
            User.find()
            .populate([{path: 'category'},{path: 'role'}])
            .exec()
            .then(users => {
                resolve(users);
            })
            .catch(e => {
                reject(e);
            })
        })
    },
    /**
     * gets all users belonging to a certain category
     * @param category - the category by which to get the users
     * @returns {Object} - the queried users
     */
    getAllUsersByCategory: category => {
        return new Promise((resolve, reject) => {
            Role.find({name: 'editor'})
            .exec()
            .then(role => {
                User.find({
                    'category': category})
                    .populate([{path: 'category'},{path:'role'}])
                .then(users => {
                    resolve(users);
                })
                .catch(err => {
                    reject(err);
                })
            })
            .catch(e => {
                console.log(e);
            })
        })
    },
    /**
     * Registers a user
     * @param {object} req - the request object containing the body and error validator
     * @param {String} fileName - the fileName of the user image to be stored in db, if any
     * @returns {String} - An error or success message
     */
	registerUser: (req, fileName = null) => {
		return new Promise(async (resolve, reject) => {
            let name = req.body.name, 
                username = req.body.username,
                email = req.body.email,
                profile_text = req.body.text,
                profile_img,
                category = req.body.category,
                role= req.body.role;
            if (fileName != null || fileName != undefined) {
                profile_img = fileName;
            }
            else {
                profile_img = req.body.oldImage;
            }

            // // Validation
            req.checkBody('category','Der skal vælges mindst én kategori!').notEmpty();
			req.checkBody('name', 'Navn er påkrævet').notEmpty();
			req.checkBody('username', 'Brugernavn er påkrævet').notEmpty();
			req.checkBody('text', 'Profiltekst er påkrævet').notEmpty();
			req.checkBody('email', 'Email er påkrævet og skal være gyldig').notEmpty().isEmail();

            if(req.validationErrors()) {
                resolve({
                    errors: req.validationErrors()
                })
            } else {
                // var errors = req.validationErrors();
                User.find({
                    username: username
                })
                .exec()
                .then(user=> {
                    if(user.length>0) {
                        resolve({user_error: 'Brugernavnet er allerede i brug, vælg et andet!'
                        })
                    } else {
                        User.find({
                            email: email
                        })
                        .exec()
                        .then(async user=> {
                            if(user.length>0) {
                                resolve({user_error: 'Email er allerede i brug, vælg et andet!'
                                })
                            } else {
                                User.find({
                                    name: name
                                })
                                .exec()
                                .then(async user=> {
                                    if(user.length>0) {
                                        resolve({user_error: 'Navn er allerede i brug, vælg et andet!'
                                        })
                                    } else {
                                        var newUser = new User({
                                            name: name,
                                            email: email,
                                            profile_text: profile_text,
                                            img: profile_img,
                                            role: role,
                                            category: category,
                                            username: username,
                                            password: await security.createPassword(username)
                                        });
                                        newUser.save(newUser, function (err, user) {
                                            if (err) reject(err);
                                            resolve({
                                                'success_msg': 'Used has been created!'
                                            });					
                                        });
                                    }
                                })
                                .catch(e => {
                                    reject(e);
                                })
                            }
                        })
                        .catch(e => {
                            reject(e);
                        })      
                    }
                })
                .catch(e => {
                    reject(e);
                })
            }
		})
	},
    /**
     * Updates a user
     * @param {object} req - the request object containing the body and error validator
     * @param {String} fileName - the fileName of the user image to be stored in db, if any
     * @returns {String} - An error or success message
     */
	updateUser: (req, fileName = null) => {
		return new Promise(async (resolve, reject) => {
            // let username = req.body.username,
            let name = req.body.name, 
                username = req.body.username,
                email = req.body.email,
                profile_text = req.body.text,
                profile_img,
                category = req.body.category,
                role= req.body.role;
                if (fileName != null || fileName != undefined) {
                    profile_img = fileName;
                }
                else {
                    profile_img = req.body.oldImage;
                }
			// // Validation
			req.checkBody('name', 'Navn er påkrævet').notEmpty();
			req.checkBody('text', 'Profiltekst er påkrævet').notEmpty();
			req.checkBody('email', 'Email er påkrævet og skal være gyldig').notEmpty().isEmail();
			// req.checkBody('username', 'brugernavn er påkrævet og skal være gyldig').notEmpty();
            
            if(req.validationErrors()) {
                resolve({
                    errors: req.validationErrors()
                })
            } else {

                User.find({
                    username: username
                })
                .exec()
                .then(user=> {
                    if(user.length>0 && user[0].id != req.params.id) {
                        resolve({user_error: 'Brugernavnet er allerede i brug, vælg et andet!'
                        })
                    } else {
                        User.find({
                            email: email
                        })
                        .exec()
                        .then(user=> {
                            if(user.length>0 && user[0].id != req.params.id) {
                                resolve({user_error: 'Email er allerede i brug, vælg et andet!'
                                })
                            } else {
                                User.find({
                                    name: name
                                })
                                .exec()
                                .then(async user=> {
                                    if(user.length>0 && user[0].id != req.params.id) {
                                        resolve({user_error: 'Navn er allerede i brug, vælg et andet!'
                                        })
                                    } else {
                                        User.updateOne({_id:req.params.id}, {
                                            // username: username,
                                            name: name,
                                            email: email,
                                            profile_text: profile_text,
                                            img: profile_img,
                                            category: category,
                                            role: role
                                        },
                                        (err, res) => {
                                            if (err) reject(err);
                                            resolve({
                                                'success_msg': 'Du har succesfuldt opdateret brugeren!'
                                            });					
                                        })
                                    }
                                })
                                .catch(e => {
                                    reject(e);
                                })
                            }
                        })
                        .catch(e => {
                            reject(e);
                        })      
                    }
                })
                .catch(e => {
                    reject(e);
                })
            }
		})
    },
    /**
     * deletes a single user by id
     * @param id - the id by which to delete the user
     * @returns {Object} - nothing important, feedback handled client side
     */
    deleteUser: id => {
        return new Promise((resolve, reject) => {
            User.findOneAndDelete({_id:id})
            .exec()
            .then(user => {
                resolve(user.img)
            })
            .catch(e => {
                reject(e);
            })
        })
    }
}