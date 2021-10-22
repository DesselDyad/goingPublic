
module.exports = {
	loadIndexPage: async (req, res, next) => {
		try {
			let obj = {};
			console.log('bla bla bbla cant open a friggin route')
			obj.title = 'Home';
			res.render('pages/index', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadAboutPage: async (req, res, next) => {
		try {
			let obj = {};
			obj.title = 'About';
			res.render('pages/about', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadContactPage: async (req, res, next) => {
		try {
			let obj = {};
			obj.title = 'Contact';
			res.render('pages/contact', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadCVPageEN: async (req, res, next) => {
		try {
			let obj = {};
			obj.title = 'Curriclum Vitae';
			res.render('cv/pages/cv_en', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadCVPageDA: async (req, res, next) => {
		try {
			let obj = {};
			obj.title = 'Curriclum Vitae';
			res.render('cv/pages/cv_da', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
	loadCVPageDE: async (req, res, next) => {
		try {
			let obj = {};
			obj.title = 'Curriclum Vitae';
			res.render('cv/pages/cv_de', obj);
		}
		catch (err) {
			console.log(err);
		}
	},
}