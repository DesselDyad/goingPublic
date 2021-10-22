const user = require('../../db/global/user');
const zombie_mongo = require('../../db/zombie/zombie_mongo');
const equipment = require('../../db/zombie/equipment');
const forum = require('../../db/zombie/forum');

const res_loader = require('../../../services/res_loader');
const zombie_content = require('../../../../public/js/zombie/zombie_content');

module.exports = {
	loadIndexPage: async (req, res, next) => {
		try {
			let obj = await res_loader.zombieData(req.ip);
			obj.title = 'ZombieMania';
			res.render('zombie/pages/index', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadContactPage: async (req, res, next) => {
		try {
			let obj = await res_loader.zombieData(req.ip);
			obj.title = 'Contact';
			res.render('zombie/pages/contact', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadStatsPage: async (req, res, next) => {
		try {
			let obj = await res_loader.zombieData(req.ip.toString());
			obj.title = 'Stats';
			res.render('zombie/pages/stats', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadLoginPage: async (req, res) => {
		try {
			if(!req.user) {
				let obj = await res_loader.zombieData(req.ip.toString());
				obj.title = 'Login';
				res.render('zombie/pages/login', obj)
			} else {
				res.redirect('profile')
			}
		}
		catch (err) {
			console.log(err);
		} 
	},
	loadRegisterPage: async (req, res) => {
		try {
			let obj = await res_loader.zombieData(req.ip);
			obj.title = 'Register';
			res.render('zombie/pages/register', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadForumPage: async (req, res) => {
		try {
			let obj = await res_loader.zombieData(req.ip);
			obj.title = 'Forum';
			res.render('zombie/pages/forum', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadSingleForum: async (req, res) => {
		try {
			let obj = await res_loader.zombieData(req.ip);
			obj.singleForum = await forum.loadSingleForum(req.params.id);
			obj.parentForum = await forum.getParentForum(obj.singleForum[0]._id);
			obj.title = 'Forum';
			res.render('zombie/pages/forum', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadSingleSubForum: async (req, res) => {
		try {
			let obj = await res_loader.zombieData(req.ip);
			obj.singleSubForum = await forum.loadSingleSubForum(req.params.id);
			obj.parentForum = await forum.getParentForum(obj.singleSubForum[0]._id);
			obj.title = 'SubForum';
			res.render('zombie/pages/forum', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadThread: async (req, res) => {
		try {
			let obj = await res_loader.zombieData(req.ip);
			obj.singleThread = await forum.loadSingleThread(req.params.id);
			obj.parentSubForum = await forum.getParentSubForum(obj.singleThread[0]._id);
			obj.parentForum = await forum.getParentForum(obj.parentSubForum[0]._id);
			console.log(obj.parentForum);
			obj.title = obj.singleThread.title;
			res.render('zombie/pages/thread', obj);
		}
		catch (err) {
			console.log(err);
		}
	} ,
	loadProfilePage: async (req, res) => {
		try {
			let obj = await res_loader.zombieData(req.ip);
			//for later, check if you can't just use req.user and save yourself the extra call
			obj.user = await user.getSingle(req.session.passport.user);
			obj.title = 'Profile';
			res.render('zombie/pages/profile', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
    loadSocialNetworkingPage: async (req, res) => {
        try {
			let obj = await res_loader.zombieData(req.ip.toString());
			obj.title = 'Social Networking';
			res.render('zombie/pages/profile/social', obj);
        } catch (e) {
            console.log(e);
        }
    },
    loadSecurityPage: async (req, res) => {
        try {
			let obj = await res_loader.zombieData(req.ip.toString());
			obj.title = 'Security';
			res.render('zombie/pages/profile/security', obj);
        } catch (e) {
            console.log(e);
        }
    },
    loadPreferencesPage: async (req, res) => {
        try {
			let obj = await res_loader.zombieData(req.ip.toString());
			obj.title = 'Preferences';
			res.render('zombie/pages/profile/preferences', obj);
        } catch (e) {
            console.log(e);
        }
    },
    loadEditPersonalInfoPage: async (req, res) => {
        try {
			let obj = await res_loader.zombieData(req.ip.toString());
			obj.title = 'Edit Personal Information';
			res.render('zombie/pages/profile/edit_info', obj);
        } catch (e) {
            console.log(e);
        }
    },
	process_movies: async (req, res) => {
		// console.log(req.body);
		let response = await zombie_mongo.processMovies(req.body);
		res.send('success');
	},
	loadZombiePage: async (req, res) => {
		try {
			console.log(req.session.passport);
			let obj = await res_loader.zombieData(req.ip);
			//for later, check if you can't just use req.user and save yourself the extra call
			if(typeof req.session.passport != 'undefined') {
				if(typeof req.session.passport.user != 'undefined') {
					obj.user = await user.getSingle(req.session.passport.user);
				}
			}
			//iterate through zombie JSON file & set page title accordingly
			// console.log(obj.zombie);
			for(let i = 0; i < obj.zombie.length; i++)  {
				for(let j = 0; j < obj.zombie[i].items.length; j++) {
					if(obj.zombie[i].items[j].name.toLowerCase() == req.params.param.toLowerCase().replace(/_/g, ' ')) {
						obj.title = obj.zombie[i].items[j].name;
					}
				}
			}
			obj.zombie_content = await zombie_content.zombie_data(req.params.param);
			if(req.params.param == 'zombie_movies') {
				obj.movies = await zombie_mongo.getMovies();
			}
			if(req.params.param.toLowerCase().replace(/_/g, ' ') == 'equipment') {
				obj.equipment = await equipment.getAll();
			}
			res.render('zombie/pages/zombiemania', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadAdminPage: async (req, res) => {
		try {
			console.log("doesn't even get here does it");
			let obj = await res_loader.zombieAdmin_data();
			obj.title = 'Admin';
			res.render('zombie/pages/admin', obj);
		}
		catch (err) {
			console.log(err);
		}
	}
}