const user = require('../../db/global/user');
const image_handler = require('../../../services/image_handler');
const logger = require('../../../services/logger');
const mailer = require('../../../services/mailer');

const res_loader = require('../../../services/res_loader');
/**
 * @module User
 */

module.exports = {
    login: async (req, res) => {
        req.flash('success_msg', 'You are now logged in!');
        var redirectTo = req.session.redirectTo || 'back';
        delete req.session.redirectTo;
        res.redirect(redirectTo);
    },
    logout: (req, res) => {
        //req.logout => delete req.session.passport.user => i think

        //from passport.coma
        // Passport exposes a logout() function on req (also aliased as logOut()) that can be called from any route handler which needs to terminate a login session. 
        // Invoking logout() will remove the req.user property and clear the login session (if any).
		req.logout();
        req.flash('success_msg', 'You are logged out');
        console.log(req.route.path);
        console.log(req.headers.referer);
		res.redirect(req.headers.referer);
    },
    /**
     * gets a single user by id
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    getSingle: async (req, res) => {
        try {
            let _user = await user.getSingle(req.session.passport.user);
            res.send(_user);
        } catch (e) {
            console.log(e);
        }
    },
    /**
     * loads all dynamic stylesheets and users and render the user page
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    getAll: async (req, res) => {
        try {
            let users = await user.getAll();
            res.send(users);
            // let obj = res_loader.data();
            // obj.title = 'User';
            // // let rows = await user.loadAll();
            // res.render('./pages/user', obj);
        } catch (e) {
            console.log(e);
        }
    },
    registerUser: async (req, res) => {
        try {
            let obj = res_loader.data();
            obj.title = 'Register';
            let fileName;
            if(req.file) {
                fileName = await image_handler.uploadUserImage(req.file);
            }
            let response = await user.registerUser(req, fileName);
            if(response.errors) {
                obj.errors = response.errors;
                obj.req_body = req.body;
                res.render('pages/register', obj);
            }
            else if(response.user_err || response.mail) {
                obj.req_body = req.body;
                obj.mail = response.mail;
                obj.user_err = response.user_err;
                res.render('pages/register', obj);
            }
            else if(response.success_msg) {
                let recipient = req.body.email,
                    subject = 'Profile created!',
                    content = `
                                <p>
                                    Hello ${req.body.name}
                                    Your profile on http://localhost:3000/user/login was created!
                                </p>
                            `;
                let rows = await mailer.send_email(recipient, subject, content);
                req.flash('success_msg', "You are registered and can now log in!");
                res.redirect('login');
            }
        }
        catch (err) {
            console.log(err);
        }
    },
    /**
     * updates a user
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    updateUser: async (req, res) => {
        try {
            let obj = res_loader.data();
            let fileName;
            if(req.file) {
                fileName = await image_handler.uploadUserImage(req.file);
            }
            let response = await user.updateUser(req, fileName);
            if(response.errors) {
                obj.errors = response.errors;
                obj.req_body = req.body;
                res.render('pages/profile', obj);
            }
            else if(response.user_err || response.mail) {
                if(response.user_err) {
                    obj.user_err = response.user_err;
                }
                if(response.mail) {
                    obj.mail = response.mail;
                }
                res.render('pages/profile', obj);
            }
            else if(response.success_msg) {
                req.flash('success_msg', "Your profile was updated successfully");
                res.redirect('/user/profile');
            }
        } catch (e) {
            console.log(e);
        }
    },
    /**
     * deletes a single user by id
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    deleteUser: async (req, res) => {
        try {
            let image = await user.deleteUser(req.session.passport.user);
            await image_handler.deleteUserImage(image);
            res.send('success');
        } catch (e) {
            console.log(e);
        }
    },
    /**
     * updates a users theme preference
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    updateUserTheme: async (req, res) => {
        try {
            let response = await user.updateUserTheme(req.session.passport.user, req.params.theme);
            res.status(200).json({"response":response});
        } catch (e) {
            console.log(e);
        }
    },
    /**
     * makes a users profile public
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    makeProfilePublic: async (req, res) => {
        try {
            let rows = await user.makeProfilePublic(req.session.passport.user);
            res.send(rows);
        } catch (e) {
            console.log(e);
        }
    }, 
    /**
     * makes a users profile private
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    makeProfilePrivate: async (req, res) => {
        try {
            let rows = await user.makeProfilePrivate(req.session.passport.user);
            res.send(rows);
        } catch (e) {
            console.log(e);
        }
    },
    /**
     * validates a users existing password
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    check_old_password: async (req, res) => {
        try {
            let response = await user.check_old_password(req.session.passport.user, req.body.old_password);
            res.status(200).json({"response":response});
        } catch (e) {
            console.log(e);
        }
    },
    /**
     * changes a users password
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    change_password: async (req, res) => {
        try {
            let response = await user.change_password(req.session.passport.user, req.body.new_password);
            res.status(200).send(response);
        } catch (e) {
            console.log(e);
        }
    },
    unlinkGoogle:  async (req, res) => {
        try {
            let response = await user.unlinkGoogle(req.user);
            req.flash('success_msg', 'Google has been unlinked from your profile!');
            res.redirect('/user/profile');
        } catch (e) {
            console.log(e);
        }
    },
    unlinkFacebook:  async (req, res) => {
        try {
            let response = await user.unlinkFacebook(req.user);
            req.flash('success_msg', 'Facebook has been unlinked from your profile!');
            res.redirect('/user/profile');
        } catch (e) {
            console.log(e);
        }
    },
    unlinkGithub:  async (req, res) => {
        try {
            let response = await user.unlinkGithub(req.user);
            req.flash('success_msg', 'Github has been unlinked from your profile!');
            res.redirect('/user/profile');
        } catch (e) {
            console.log(e);
        }
    },
    /**
     * gets all editors
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    getAllEditors: async (req, res) => {
        try {
            let editors = await user.getAllEditors();
            res.send(editors);
        }
        catch (e) {
            console.log(e);
        }
    },
}