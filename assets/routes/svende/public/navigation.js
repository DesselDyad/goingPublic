var navigation = require('../../../mongo/modules/svende/navigation');
const security = require('../../../services/security');

module.exports = (app) => {
	// load home page
	app.get('/apprenticeship_test', navigation.loadIndexPage);
	// load cars page
	app.get('/cars', navigation.loadCarsPage);
	app.get('/cars/getSingle/:id', navigation.loadSingleCar);
	// load boats page
	app.get('/boats', navigation.loadBoatsPage);
	app.get('/boats/getSingle/:id', navigation.loadSingleBoat);
	// load bikes page
	app.get('/bikes', navigation.loadBikesPage);
	app.get('/bikes/getSingle/:id', navigation.loadSingleBike);
	// load archive page
	app.get('/archive', navigation.loadArchivePage);
	// load contact page
	app.get('/svende_contact', navigation.loadContactPage);
	// load editorial
	app.get('/editorial', navigation.loadEditorialPage);
	// load editorial
	app.get('/sponsor', navigation.loadSponsorPage);
	// load register dummy page
	app.get('/register', navigation.loadRegisterPage);
	// load login page
	app.get('/apprenticeship_test/user/login', navigation.loadLoginPage);
	// load login page
	app.get('/apprenticeship_test/admin', security.svende_ensureAuthenticated, navigation.loadAdminPage);
}
