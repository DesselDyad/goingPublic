var user = require('../../../mongo/modules/global/user');
var passport = require('passport');
const security = require('../../../services/security');
const multer = require("multer");
const upload = multer({
    dest: "./temp/images/"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

module.exports = (app) => {
    //zombie & fish user register, login & logout
	app.post('/user/register', upload.single('userImage'), user.registerUser);
	app.post('/user/login', passport.authenticate('local', {failureRedirect: 'back', failureFlash: 'Username or password are invalid'}), user.login );
    app.get('/user/logout', user.logout);
    
    //user query single & all
    app.get('/user', user.getAll);
    app.get('/user/getSingle', user.getSingle);
    //user delete single
    app.post('/user/deleteUser', security.ensureAuthenticated, user.deleteUser);
    //user update user (via profile page)
    app.post('/user/updateUser', security.ensureAuthenticated, upload.single('userImage'), user.updateUser);

    //user preferences
    app.get('/user/updateUserTheme/:theme', security.ensureAuthenticated, user.updateUserTheme);
    app.get('/user/makeProfilePublic', security.ensureAuthenticated, user.makeProfilePublic);
    app.get('/user/makeProfilePrivate', security.ensureAuthenticated, user.makeProfilePrivate);

    //user password management
    app.post('/user/validate_old_password', security.ensureAuthenticated, user.check_old_password);
    app.post('/user/change_password', security.ensureAuthenticated, user.change_password);
}