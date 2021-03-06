var user = require('../../../mongo/modules/global/user');
var navigation = require('../../../mongo/modules/svende/navigation');
var passport = require('passport');

module.exports = (app) => {
    //svende login, logout
    app.post('/apprenticeship_test/user/login', passport.authenticate('local', {failureRedirect: '/apprenticeship_test/user/login', failureFlash: 'Username or password are invalid'}), user.login );
    app.get('/user/logout', user.logout);
    
    //user routes
    app.get('/user/getSingle/:id', user.getSingle);
    app.get('/user/getAllEditors', user.getAllEditors);
    //dev
	app.post('/user/register', user.registerUser); //think this was only used for development purposes, but i'll leave it anyway
}