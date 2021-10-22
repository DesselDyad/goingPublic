var navigation = require('../../../mongo/modules/zombie/navigation');
const security = require('../../../services/security');

module.exports = (app) => {
	// Get Homepage
	app.get('/zombiemania', navigation.loadIndexPage);
	
	// Profile
	app.get('/zombie/user/profile', security.ensureAuthenticated, navigation.loadProfilePage);
	app.get('/zombie/user/profile/socialNetworking', security.ensureAuthenticated, navigation.loadSocialNetworkingPage);
	app.get('/zombie/user/profile/security', security.ensureAuthenticated, navigation.loadSecurityPage);
	app.get('/zombie/user/profile/edit_preferences', security.ensureAuthenticated, navigation.loadPreferencesPage);
	app.get('/zombie/user/profile/edit_personal_info', security.ensureAuthenticated, navigation.loadEditPersonalInfoPage);

	// Login
	app.get('/zombie/user/login', navigation.loadLoginPage);

	// Register
	app.get('/user/register', navigation.loadRegisterPage);

	// Register
	app.get('/forum', navigation.loadForumPage);
	app.get('/forum/:id', navigation.loadSingleForum);
	app.get('/forum/sub_forum/:id', navigation.loadSingleSubForum);
	app.get('/forum/sub_forum/thread/:id', navigation.loadThread);

	app.get('/zombie_contact', navigation.loadContactPage);
	app.get('/stats', navigation.loadStatsPage);
    app.get('/zombiemania/:param', navigation.loadZombiePage);
	app.post('/zombieMovies', navigation.process_movies);
}
