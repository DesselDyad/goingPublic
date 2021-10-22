const FishSpecies = require('../../../models/fish/fish_species');

module.exports = {
    getSingle: id => {
        return new Promise((resolve, reject) => {
            FishSpecies.find({_id:id})
            .exec()
            .then(fish_species => {
                resolve(fish_species);
			})
			.catch(e => {
				reject(e);
			})
        })
    },
    getAll: () => {
        return new Promise((resolve, reject) => {
            FishSpecies.find({})
            .exec()
            .then(fish_species => {
                resolve(fish_species);
			})
			.catch(e => {
				reject(e);
			})
        })
    },
	addFishSpecies: (req, fileNames = ['no-image.png']) => {
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
                await FishSpecies.findOne({
					name: _name
				}).exec().then(location => {
					if(location) {
						resolve({location_err:'species exists'})
					} else {
						var newLocation = new FishSpecies({
							name: _name,
							description: _description,
							external_ref: _external_ref,
							images: fileNames
						});
						newLocation.save(newLocation, function (err, location) {
							if (err) reject(err);
							resolve({
								'success_msg': 'success_msg',
								'message': 'You have added the species!'
							});
						});
					}
				})
			}
			
		})
	},
	updateFishSpecies: (req, id, fileNames = null) => {
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
				FishSpecies.findOne({name: _name})
				.exec()
				.then(fish_species => {
					if(fish_species._id == id) {
						FishSpecies.update({_id: id}, {
							name: _name, 
							description: _description, 
							external_ref: _external_ref
						},
						(err, fish_species) => {
							if(err) {
								reject(err); 
							} else {
								resolve({
									'success_msg': 'Fish species updated successfully'
								})
							}
						})
					} else {
						resolve({'fish_species_err': 'Fish species already exists'})
					}
				})
				.catch(e => {
					reject(e);
				})
			}
		})
	},
	deleteFishSpecies: (id) => {
		return new Promise((resolve, reject) => {
			FishSpecies.findByIdAndRemove({ _id: id }, (err, species) => {
				if (err) reject(err);
				else {
					resolve(species.images);
				}
			})
		})
	},
	addFishSpeciesImages: (imageNames, id) => {
		return new Promise((resolve, reject) => {
			FishSpecies.update({ _id: id }, {
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
			FishSpecies.find({_id: id}, {images: 1})
			.exec()
			.then(fish_species => {
				let remaining_images = fish_species[0].images;
				for(i = 0; i < images.length; i++) {
					let index = fish_species[0].images.indexOf(images[i]);    // <-- Not supported in <IE9
					if (index !== -1) {
						remaining_images = fish_species[0].images.splice(index, 1);
					}
				}
				FishSpecies.update({_id: id}, {images: fish_species[0].images}, (err, fish_species) => {
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
    getFishSpeciesData: () => {
        return new Promise((resolve, reject) => {
            FishSpecies.find({projection: {name: 1}})
            .exec()
            .then(fish_species_data => {
                resolve(fish_species_data);
			})
			.catch(e => {
				reject(e);
			})
        })
    },
}