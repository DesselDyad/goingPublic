var Fish = require('../../../models/fish/fish');
var FishSpecies = require('../../../models/fish/fish_species');
const mongoose = require('mongoose');

module.exports = {
    getSingle: id => {
        return new Promise((resolve, reject) => {
            Fish.find({_id:id})
			.populate([{ path: 'species' }, { path: 'location' }, {path: 'caught_by'}])
            .exec()
            .then(fish => {
                resolve(fish);
            })
			.catch(e => {
				reject(e);
			})
        })
    },
    getAll: () => {
        return new Promise((resolve, reject) => {
			Fish.find({})
				.populate([{ path: 'species' }, { path: 'location' }, {path: 'caught_by'}])
				.exec()
				.then(fish => {
					resolve(fish);
				})
				.catch(e => {
					reject(e);
				})
        })
	},
	getAllFromSpecies: (id) => {
        return new Promise((resolve, reject) => {
			Fish.find({species: id})
			.populate([{ path: 'species' }, { path: 'location' }, {path: 'caught_by'}])
			.exec()
			.then(fish => {
				resolve(fish);
			})
			.catch(e => {
				reject(e);
			})
        })
	},
    getLatest: () => {
        return new Promise((resolve, reject) => {
			Fish.find({})
				.limit(15)
				.sort({date_caught: -1})
				.populate([{ path: 'species' }, { path: 'location' }, {path: 'caught_by'}])
				.exec()
				.then(latest => {
					Fish.count()
					.exec()
					.then(count => {
						resolve({
							'fish': latest,
							'count': count});
					})
					.catch(err => {
						reject(err);
					})
				})
				.catch(e => {
					reject(e);
				})
        })
	},
	loadSingleDate: (date) => {
        return new Promise((resolve, reject) => {
			Fish.find({"date_caught": date})
				.populate([{ path: 'species' }, { path: 'location' }, {path: 'caught_by'}])
				.exec()
				.then(distinct_dates => {
					resolve(distinct_dates);
				})
				.catch(e => {
					reject(e);
				})
        })
	},
    getLatestDate: () => {
        return new Promise((resolve, reject) => {
			Fish.find()
				.populate([{ path: 'species' }, { path: 'location' }, {path: 'caught_by'}])
				.sort({"date_caught": -1})
				.limit(1)
				.exec()
				.then(distinct_dates => {
					resolve(distinct_dates);
				})
				.catch(e => {
					reject(e);
				})
        })
	},
    getDistinctDates: () => {
        return new Promise((resolve, reject) => {
			Fish.distinct("date_caught")
				.populate([{ path: 'species' }, { path: 'location' }, {path: 'caught_by'}])
				.exec()
				.then(distinct_dates => {
					resolve(distinct_dates);
				})
				.catch(e => {
					reject(e);
				})
        })
	},
	getFishRecordsData: () => {
        return new Promise((resolve, reject) => {
			FishSpecies.find({})
				.exec()
				.then(species => {
					let records = [];
					for(var i = 0; i < species.length; i++) {
						Fish.find({species: species[i]._id})
						.limit(2)
						.sort({"weight": -1})
						.populate([{ path: 'species' }, { path: 'location' }, {path: 'caught_by'}])
						.exec()
						.then(biggest => {
							records.push(biggest);
							if(records.length == species.length) {
								resolve(records);
							}
						})
						.catch(e => {
							console.log(e);
						}) 
					}
				})
				.catch(e => {
					reject(e);
				})
        })
	},
	getRandomRecord: () => {
		return new Promise((resolve,reject) => {
			FishSpecies.find({})
			.exec()
			.then(species => {
				let rand = species[Math.floor(Math.random() * species.length)];
				Fish.find({species: rand._id})
				.limit(1)
				.sort({"weight": -1})
				.populate([{ path: 'species' }, { path: 'location' }, {path: 'caught_by'}])
				.exec()
				.then(biggest => {
					resolve(biggest);
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
	getSingleSpeciesRecords: (id) => {
        return new Promise((resolve, reject) => {
			Fish.find({'species': id}).limit(5).sort({"weight": -1}).populate([{ path: 'species' }, { path: 'location' }, {path: 'caught_by'}])
			.exec()
			.then(biggest => {
				resolve(biggest);
			})
			.catch(e => {
				reject(e);
			})
		})
	},
	addFish: (req, fileNames = ['no-image.png']) => {
		return new Promise(async (resolve, reject) => {
			// var dateTime = require('node-datetime');
			// var dt = dateTime.create();
			// var formatted = dt.format('Y-m-d H:M:S');
			var date_caught = req.body.date_caught;
			var weight = req.body.weight;
			var species = req.body.species;
			var location = req.body.location;
			var _description = req.body.description;
			if(req.body.caught_by == null || typeof(req.body.caught_by) == 'undefined' || req.body.caught_by == undefined) {
				var caught_by = req.session.passport.user;	
			} else {
				var caught_by = req.body.caught_by;
			}

			// Validation
			req.checkBody('weight', 'weight is required').notEmpty();
			req.checkBody('species', 'species is required').notEmpty();
			req.checkBody('location', 'location is required').notEmpty();
			req.checkBody('description', 'description is required').notEmpty();

			var errors = req.validationErrors();

			if (errors) {
				resolve({ errors: errors });
			} else {
                var newFish = new Fish({
                    species: new mongoose.mongo.ObjectID(species),
                    location: new mongoose.mongo.ObjectID(location),
					caught_by: new mongoose.mongo.ObjectID(caught_by),
					date_caught: date_caught,
                    weight: weight,
					description: _description,
                    images: fileNames
                });
                newFish.save(newFish, function (err, fish) {
                    if (err) reject(err);
                });
                resolve({
                    'success_msg': 'You have added the fish!'
                });
            }
			
		})
	},
	updateFish: (req, id, fileNames = null) => {
		return new Promise(async (resolve, reject) => {
			var date_caught = req.body.date_caught;
			var weight = req.body.weight;
			var species = req.body.species;
			var location = req.body.location;
			var caught_by = req.body.caught_by;
			var description = req.body.description;

			// Validation
			req.checkBody('weight', 'Weight is required').notEmpty();
			req.checkBody('species', 'Species is required').notEmpty();
			req.checkBody('location', 'Location is required').notEmpty();
			req.checkBody('caught_by', 'Caught by is required').notEmpty();
			req.checkBody('description', 'Description is required').notEmpty();

			var errors = req.validationErrors();

			if (errors) {
				resolve({ errors: errors });
			} else {
				Fish.update({_id: id}, {
					'species': new mongoose.mongo.ObjectID(species),
					'location': new mongoose.mongo.ObjectID(location),
					'caught_by': new mongoose.mongo.ObjectID(caught_by),
					'date_caught': date_caught,
					'weight': weight,
					'description': description
				}, (err, fish) => {
					if (err) {
						reject(err); 
					} else {
						resolve({
							'success_msg': 'You have updated the fish!'
						});
					}
				});
			}
		})
	},
	deleteFish: (id) => {
		return new Promise((resolve, reject) => {
			Fish.findByIdAndRemove({ _id: id }, (err, fish) => {
				if (err) reject(err);
				else {
					resolve(fish.images)
				}
			})
		})
	},
	addFishImages: (imageNames, id) => {
		return new Promise((resolve, reject) => {
			Fish.update({ _id: id }, {
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
			Fish.find({_id: id}, {images: 1})
			.exec()
			.then(fish => {
				let remaining_images = fish[0].images;
				for(i = 0; i < images.length; i++) {
					let index = fish[0].images.indexOf(images[i]);    // <-- Not supported in <IE9
					if (index !== -1) {
						remaining_images = fish[0].images.splice(index, 1);
					}
				}
				Fish.update({_id: id}, {images: fish[0].images}, (err, fish) => {
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
	}
}