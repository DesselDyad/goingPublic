var Subscriber = require('../../../models/global/subscriber');

/**
 * @module Role
 */
module.exports = {
    /**
     * gets all roles
     */
    getAll: () => {
		return new Promise((resolve, reject) => {
			Subscriber.find((err, subscribers ) => {
				if(err) reject(err);
				resolve(subscribers);
			})
		})
    },
    subscribe: (_name, _email) => {
        return new Promise(async (resolve, reject) => {
            //checking for email already taken
            await Subscriber.findOne({
                email: {
                    "$regex": "^" + _email + "\\b", "$options": "i"
                }
            }, (err, mail) => {
                if(err)reject(err);
                if (mail) {
                    resolve({
                        mail: mail
                    });
                }
                else {
                    var subscriber = new Subscriber({
                        name: _name,
                        email: _email
                    });
                    subscriber.save(err => {
                        if(err) reject(err);
                        else {
                            resolve({
                                'success_msg': 'success_msg',
                                'message': 'Subscriber added!'
                            });
                        }
                    })
                }
            })
        })
    },
    unsubscribe: (_email) => {
        return new Promise((resolve, reject) => {
			Subscriber.findOneAndRemove({email: _email}, (err, res ) => {
				if(err) reject(err);
                resolve({
                    'success_msg': 'success_msg',
                    'message': 'Subscriber removed!'
                });
			})
        })
    },
    /**
     * gets all roles
     * @param {object} req - the request object
     */
    addSubscriber: (req) => {
		return new Promise(async (resolve, reject) => {

			var name = req.body.name;
			var email = req.body.email;
			// Validation
			req.checkBody('name', 'Name is required').notEmpty();
			req.checkBody('email', 'Email is required').notEmpty();
			req.checkBody('email', 'Email is not valid').isEmail();
			// Subscriber.find((err, subscribers ) => {
			// 	if(err) reject(err);
			// 	console.log(subscribers);
			// 	resolve(subscribers);
			// })
			var errors = req.validationErrors();

			if (errors) {
				resolve({errors: errors});
            }
            else {
				//checking for email already taken
					await Subscriber.findOne({
						email: {
							"$regex": "^" + email + "\\b", "$options": "i"
						}
					}, async (err, mail) => {
                        if(err)reject(err);
                        if (mail) {
                            resolve({
                                mail: mail
                            });
                        }
                        else {
                            var subscriber = new Subscriber({
                                name: name,
                                email: email
                            });
                            subscriber.save(err => {
                                if(err) reject(err);
                                else {
                                    resolve({
                                        'success_msg': 'success_msg',
                                        'message': 'Subscriber added!'
                                    });
                                }
                            })
                        }
                    })
            }
		})
    },
    /**
     * gets all roles
     * @param {Number} id - the id pointing to the subscriber to remove
     */
    removeSubscriber: (id) => {
		return new Promise((resolve, reject) => {
			Subscriber.findOneAndRemove({_id: id}, (err, res ) => {
				if(err) reject(err);
                resolve(res);
			})
		})
    }
}