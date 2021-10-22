const _Location = require('../../../models/fish/location');
const Fish = require('../../../models/fish/fish');

module.exports = {
    getSingle: id => {
        return new Promise((resolve, reject) => {
            _Location.find({_id:id})
            .exec()
            .then(location=> {
                resolve(location);
			})
			.catch(e => {
				reject(e);
			})
        })
    },
    getAll: (param = '') => {
        return new Promise((resolve, reject) => {
            _Location.find({'name' : new RegExp(param, 'i')})
            .exec()
            .then(locations=> {
                resolve(locations);
			})
			.catch(e => {
				reject(e);
			})
        })
    },
    getRandomLocation: () => {
        return new Promise((resolve, reject) => {
            _Location.find()
            .exec()
            .then(locations => {
				let rand = [Math.floor(Math.random() * locations.length)];
                resolve(locations[rand]);
			})
			.catch(e => {
				reject(e);
			})
        })
    },
    loadSingleLocation: id => {
        return new Promise((resolve, reject) => {
            _Location.find({_id:id})
            .exec()
            .then(location=> {
				Fish.find({'location': id})
				.populate([{ path: 'species' }, { path: 'location' }, {path: 'caught_by'}])
				.exec()
				.then(fishes => {
					resolve({
						"location": location,
						"fishes": fishes
					});
				})
				.catch(e => {
					reject(e);
				})
			})
			.catch(e => {
				reject(e);
			})
        })
    },
    getSingleLocationImages: id => {
        return new Promise((resolve, reject) => {
            _Location.find({_id:id}, {
				images: 1
			})
            .exec()
            .then(images => {
                resolve(images);
			})
			.catch(e => {
				reject(e);
			})
        })
    },
	addLocation: (req, fileNames = ['no-image.png']) => {
		return new Promise(async (resolve, reject) => {
			// var dateTime = require('node-datetime');
			// var dt = dateTime.create();
			// var formatted = dt.format('Y-m-d H:M:S');
			var _name = req.body.name;
			var _description = req.body.description;
			var _external_ref = req.body.external_ref;

			// Validation
			req.checkBody('name', 'Name is required').notEmpty();
			req.checkBody('description', 'Description is required').notEmpty();

			var errors = req.validationErrors();

			if (errors) {
				resolve({ errors: errors });
			} else {
                await _Location.findOne({
					name: _name
				}).exec().then(location => {
					if(location) {
						resolve({location_err:'location exists'})
					} else {
						var newLocation = new _Location({
							name: _name,
							description: _description,
							external_ref: _external_ref,
							images: fileNames
						});
						newLocation.save(newLocation, function (err, location) {
							if (err) reject(err);
							resolve({
								'success_msg':'You have added the location!'
							});
						});
					}
				})
			}
			
		})
	},
	updateLocation: (req, id, fileNames = null) => {
		return new Promise(async (resolve, reject) => {

			var _name = req.body.name;
			var _description = req.body.description;
			var _external_ref = req.body.external_ref;

			// Validation
			req.checkBody('name', 'Name is required').notEmpty();
			req.checkBody('description', 'Description is required').notEmpty();

			var errors = req.validationErrors();

			if (errors) {
				resolve({ errors: errors });
			} else {
				_Location.findOne({name: _name})
				.exec()
				.then(location => {
					if(location._id == id) {
						_Location.update({_id: id}, {
							name: _name, 
							description: _description, 
							external_ref: _external_ref
						},
						(err, location) => {
							if(err) {
								reject(err); 
							} else {
								resolve({
									'success_msg': 'location updated successfully'
								})
							}
						})
					} else {
						resolve({'location_err': 'location already exists'})
					}
				})
				.catch(e => {
					reject(e);
				})
			}
		})
	},
	deleteLocation: (id) => {
		return new Promise((resolve, reject) => {
			_Location.findByIdAndRemove({ _id: id }, (err, location) => {
				if (err) reject(err);
				else {
					resolve(location.images);
				}
			})
		})
	},
	addLocationImages: (imageNames, id) => {
		return new Promise((resolve, reject) => {
			_Location.update({ _id: id }, {
				$push: {
					images: {
						$each: imageNames
					}
				}
			})
			.exec()
			.then(response => {
				resolve({ 'success_msg': 'succesfuldt opdateret!' })
			})
			.catch(err => {
				reject(err);
			})
		})
	},
	deleteImages: (images, id) => {
		return new Promise((resolve, reject) => {
			_Location.find({_id: id}, {images: 1})
			.exec()
			.then(location => {
				let remaining_images = location[0].images;
				for(i = 0; i < images.length; i++) {
					let index = location[0].images.indexOf(images[i]);    // <-- Not supported in <IE9
					if (index !== -1) {
						remaining_images = location[0].images.splice(index, 1);
					}
				}
				_Location.update({_id: id}, {images: location[0].images}, (err, location) => {
					if(err) {
						reject(err);
					} else {
						resolve({
							'success_msg': 'images removed!'
						})
					}
				})
			})
			.catch(e => {
				reject(e);
			})
		})
	},
	getLocationsData: () => {
        return new Promise((resolve, reject) => {
            _Location.find({projection: {name: 1}})
            .exec()
            .then(locations_data => {
                resolve(locations_data);
			})
			.catch(e => {
				reject(e);
			})
        })
    },
}