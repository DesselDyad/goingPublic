//for page specific loading//contact_info
const editors = require('../../db/svende/editors');
const sponsor = require('../../db/svende/sponsor');
const articles = require('../../db/svende/article');
const advertisements = require('../../db/svende/advertisements');
//bring in page.svendeData ressources from service
const res_loader = require('../../../services/res_loader');

/**
 * @module Navigation
 * Just about any kind of page navigation is handled here
 */
module.exports = {
    /**
     * Loads the home page
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
	loadIndexPage: async (req, res) => {
		try{
			let obj = await res_loader.svendeData();
			obj.articles = await articles.getFrontPageArticles();
			obj.title = "Forside";
			res.render('svende/pages/index', obj);
		}
		catch (e) {
			console.log(e);
		}
	},
    /**
     * Loads the cars page
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
	loadCarsPage: async (req, res) => {
		try {
			let obj = await res_loader.svendeData();
			obj.sidebar.sidebar_articles = await articles.getCarSideBarArticles();
			obj.sidebar.advertisements = await advertisements.getCarAdvertisements();
			obj.articles = await articles.getCarArticles();
			let count = obj.articles.length;
			if(req.query.page > 1) {
				let page = req.query.page;
				obj.pageParam = page;
				//based on page variable, return only part of the bikes
				while(page > 1 && obj.articles.length > 3) {
					page--;
					obj.articles.splice(0,3);
				}
				obj.pageCount = 1;
				while((count / 3) > 1) {
					obj.pageCount++;
					count = count-3;
				}
			} else {
				obj.pageParam = 1;
				obj.pageCount = 1;
				while((count / 3) > 1) {
					obj.pageCount++;
					count = count-3;
				}
				obj.articles = obj.articles.splice(0,3);
			}
			obj.title = "Biler";
			res.render('svende/pages/cars', obj);
		}
		catch (e) {
			console.log(e);
		}
	},
    /**
     * Loads the cars page with a single car article
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
	loadSingleCar: async (req, res) => {
		try {
			let obj = await res_loader.svendeData();
			obj.sidebar.sidebar_articles = await articles.getCarSideBarArticles();
			obj.sidebar.advertisements = await advertisements.getCarAdvertisements();
			let response = await articles.updateViewCount(req.params.id);
			obj.single_car = await articles.getSingle(req.params.id);
			obj.title = "Biler";
			res.render('svende/pages/cars', obj);
		}
		catch (e) {
			console.log(e);
		}
	},
    /**
     * Loads the boats page
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
	loadBoatsPage: async (req, res) => {
		try {
			let obj = await res_loader.svendeData();
			obj.sidebar.sidebar_articles = await articles.getBoatSideBarArticles();
			obj.sidebar.advertisements = await advertisements.getBoatAdvertisements();
			console.log(obj.sidebar.advertisements);
			obj.articles = await articles.getBoatArticles();
			let count = obj.articles.length;
			if(req.query.page > 1) {
				let page = req.query.page;
				obj.pageParam = page;
				//based on page variable, return only part of the bikes
				while(page > 1 && obj.articles.length > 3) {
					page--;
					obj.articles.splice(0,3);
				}
				obj.pageCount = 1;
				while((count / 3) > 1) {
					obj.pageCount++;
					count = count-3;
				}
			} else {
				obj.pageParam = 1;
				obj.pageCount = 1;
				while((count / 3) > 1) {
					obj.pageCount++;
					count = count-3;
				}
				obj.articles = obj.articles.splice(0,3);
			}
			obj.title = "Både";
			res.render('svende/pages/boats', obj);
		}
		catch (e) {
			console.log(e);
		}
	},
    /**
     * Loads the boats page with a single boat article
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
	loadSingleBoat: async (req, res) => {
		try {
			let obj = await res_loader.svendeData();
			obj.sidebar.sidebar_articles = await articles.getBoatSideBarArticles();
			obj.sidebar.advertisements = await advertisements.getBoatAdvertisements();
			let response = await articles.updateViewCount(req.params.id);
			obj.single_boat = await articles.getSingle(req.params.id);
			obj.title = "Både";
			res.render('svende/pages/boats', obj);
		}
		catch (e) {
			console.log(e);
		}
	},
    /**
     * Loads the bikes page
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
	loadBikesPage: async (req, res) => {
		try {
			let obj = await res_loader.svendeData();
			obj.sidebar.sidebar_articles = await articles.getBikeSideBarArticles();
			obj.sidebar.advertisements = await advertisements.getBikeAdvertisements();
			obj.articles = await articles.getBikeArticles();
			let count = obj.articles.length;
			if(req.query.page > 1) {
				let page = req.query.page;
				obj.pageParam = page;
				//based on page variable, return only part of the bikes
				while(page > 1 && obj.articles.length > 3) {
					page--;
					obj.articles.splice(0,3);
				}
				obj.pageCount = 1;
				while((count / 3) > 1) {
					obj.pageCount++;
					count = count-3;
				}
			} else {
				obj.pageParam = 1;
				obj.pageCount = 1;
				while((count / 3) > 1) {
					obj.pageCount++;
					count = count-3;
				}
				obj.articles = obj.articles.splice(0,3);
			}
			obj.title = "Bike's";
			res.render('svende/pages/bikes', obj);
		}
		catch (e) {
			console.log(e);
		}
	},
    /**
     * Loads the bikes page with a single bike article
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
	loadSingleBike: async (req, res) => {
		try {
			let obj = await res_loader.svendeData();
			obj.sidebar.sidebar_articles = await articles.getBikeSideBarArticles();
			obj.sidebar.advertisements = await advertisements.getBikeAdvertisements();
			let response = await articles.updateViewCount(req.params.id);
			obj.single_bike = await articles.getSingle(req.params.id);
			obj.title = "Bike's";
			res.render('svende/pages/bikes', obj);
		}
		catch (e) {
			console.log(e);
		}
	},
    /**
     * Loads the archives page
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
	loadArchivePage: async (req, res) => {
		try {
			let obj = await res_loader.svendeData();
			obj.articles = await articles.getAll();
			let count = obj.articles.length;
			if(req.query.page > 1) {
				let page = req.query.page;
				obj.pageParam = page;
				//based on page variable, return only part of the bikes
				while(page > 1 && obj.articles.length > 5) {
					page--;
					obj.articles.splice(0,5);
				}
				obj.pageCount = 1;
				while((count / 5) > 1) {
					obj.pageCount++;
					count = count-5;
				}
			} else {
				obj.pageParam = 1;
				obj.pageCount = 1;
				while((count / 5) > 1) {
					obj.pageCount++;
					count = count-5;
				}
				obj.articles = obj.articles.splice(0,5);
			}
			// console.log("obj", obj)
			console.log({
				'req.query.page':req.query.page,
				'obj.articles.length': obj.articles.length
			})
			obj.title = "Arkiv";
			res.render('svende/pages/archive', obj);
		}
		catch (e) {
			console.log(e);
		}
	},
    /**
     * Loads the editorial page
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
	loadEditorialPage: async (req, res) => {
		try {
			let obj = await res_loader.svendeData();
			obj.editors = await editors.getAll();
			obj.title = "Redaktionen";
			res.render('svende/pages/editorial', obj);
		}
		catch (e) {
			console.log(e);
		}
	},
    /**
     * Loads the editorial page
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
	loadSponsorPage: async (req, res) => {
		try {
			let obj = await res_loader.svendeData();
			obj.prices = await sponsor.getPrices();
			obj.description = await advertisements.getDescription();
			obj.title = "Sponsor";
			res.render('svende/pages/sponsor', obj);
		}
		catch (e) {
			console.log(e);
		}
	},
    /**
     * Loads the contact page
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
	loadContactPage: async (req, res) => {
		try {
			let obj = await res_loader.svendeData();
			obj.title = "Kontakt";
			res.render('svende/pages/contact', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
    /**
     * Loads the login page
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
	loadRegisterPage: async (req, res) => {
		try {
			let obj = await res_loader.svendeData();
			obj.title = "Register";
			res.render('svende/pages/register', obj);
		}
		catch (err) {
			console.log(err);
		} 
	},
    /**
     * Loads the login page
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
	loadLoginPage: async (req, res) => {
		try {
			let obj = await res_loader.svendeData();
			obj.title = "Login";
			req.flash('succes_msg', 'Succesfuld login!')
			res.render('svende/pages/login', obj);
		}
		catch (err) {
			console.log(err);
		} 
	},
    /**
     * Loads the admin page
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
	loadAdminPage: async (req, res) => {
		try {
			let obj = await res_loader.svendeData();
			obj.user_role = await res_loader.populateReqUser(req.user);
			obj.title = "Admin";
			res.render('svende/pages/admin', obj);
		}
		catch (err) {
			console.log(err);
		}
	}
}