var navigation = require('../../../mongo/modules/global/navigation');
const security = require('../../../services/security');

module.exports = (app) => {
	// Get Homepage
	app.get('/', navigation.loadIndexPage);
	// Get about me page
	app.get('/about', navigation.loadAboutPage);
	//Get Contact
	app.get('/contact', navigation.loadContactPage);
	//Get CV ENGLISH
	app.get('/cv/en', navigation.loadCVPageEN);
	//Get CV DANISH
	app.get('/cv/da', navigation.loadCVPageDA);
	//Get CV GERMAN
	app.get('/cv/de', navigation.loadCVPageDE);
}

