var navigation = require('../../../mongo/modules/fish/navigation');
const security = require('../../../services/security');

module.exports = (app) => {
	// Get Homepage
	app.get('/fishbuddy', navigation.loadIndexPage);
	
	// Get Fish page
	app.get('/fish', navigation.loadFishPage);
	app.get('/singleFish/:id', navigation.loadSingleFish);
	
	// Get Fish Species page
	app.get('/fish_species', navigation.loadFishSpeciesPage);
	app.get('/singleFishSpecies/:id', navigation.loadSingleFishSpecies);
	
	// Get Location page
	app.get('/locations', navigation.loadLocationPage);
	app.get('/locations/getSingleLocation/:id', navigation.loadSingleLocation);

	// Get Dates page
	app.get('/dates', navigation.loadDatesPage);
	app.get('/loadSingleDate/:date', navigation.loadSingleDate);

	// Get Records page
	app.get('/records', navigation.loadRecordsPage);
    app.get('/records/getSingleSpeciesRecords/:id',  navigation.getSingleSpeciesRecords);

	//PROFILE PAGE NAVIGATION (should almost make a seperate module for this)
	// View "Logged In" profile
	app.get('/fish/user/profile', security.ensureAuthenticated, navigation.loadProfilePage);
    app.get('/fish/user/profile/myFish', security.ensureAuthenticated, navigation.myFish);
	app.get('/fish/user/profile/socialNetworking', security.ensureAuthenticated, navigation.loadSocialNetworkingPage);
	app.get('/fish/user/profile/security', security.ensureAuthenticated, navigation.loadSecurityPage);
	app.get('/fish/user/profile/edit_preferences', security.ensureAuthenticated, navigation.loadPreferencesPage);
	app.get('/fish/user/profile/edit_personal_info', security.ensureAuthenticated, navigation.loadEditPersonalInfoPage);
	//View "target" profile
	app.get('/user/showProfile/:id', security.ensureAuthenticated, navigation.loadTargetProfilePage);

	// Login
	app.get('/fish/user/login', navigation.loadLoginPage);

	// Register
	app.get('/user/register', navigation.loadRegisterPage);

	// Contact
	app.get('/fish_contact', navigation.loadContactPage);

	// Stats
	app.get('/stats', navigation.loadStatsPage);
}
