const res_loader = require('../../services/res_loader');

const image_handler = require('../../services/image_handler');
const logger = require('../../services/logger');
const mailer = require('../../services/mailer');
const newsletter = require('../mongo_modules/newsletter');

module.exports = {
    addUser: async (req, res) => {
        try {
            let fileName;
            if(req.file) {
                fileName = await image_handler.uploadImage(req.file);
            }
            let obj = await res_loader.admin_data();
            let response = await user.registerUser(req, fileName);
            if(response.errors) {
                obj.errors = response.errors;
                obj.add_user_body = req.body;
                obj.title = 'Admin'
                res.render('pages/admin', obj);
            }
            else if(response.user_err || response.mail) {
                obj.title = 'Admin';
                ovj.add_user_body = req.body;
                obj.mail = response.mail,
                obj.user_err = response.user_err,
                res.render('pages/admin', obj)
            }
            else if(response.success_msg) {
                let recipient = req.body.email,
                    subject = 'Profile added!',
                    content = `
                                Hello ${req.body.name}
                                <b>The site admin added an account for you!!</b>
                                <p>
                                    You can login with the password: ${req.body.password}
                                </p>
                                <p>
                                    and then change it via. your user profile if you want to!
                                </p>
                                <p>
                                    Here's a link to the site!
                                </p>
                                <a href="http://localhost:3000/user/login">Log In</a>
                            `;
                let rows = await mailer.send_email(recipient, subject, content);
                req.flash('success_msg','The user has been successfully added!');
                res.redirect('/admin');
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
            let fileName;
            if(req.file) {
                fileName = await image_handler.uploadImage(req.file);
            }
            let obj = await res_loader.admin_data();
            let response = await user.updateUser(req, fileName);
            if(response.errors) {
                obj.errors = response.errors;
                obj.update_user_body = req.body;
                obj.update_user_body.fileName = fileName;
                obj.update_user_body.params_id = req.params.id;
                obj.title = 'Admin'
                res.render('pages/admin', obj);
            }
            else if(response.user_err || response.mail) {
                obj.errors = response.errors;
                obj.update_user_body = req.body;
                obj.update_user_body.fileName = fileName;
                obj.update_user_body.params_id = req.params.id;
                obj.title = 'Admin';
                if(response.user_err) {
                    obj.user_err = response.user_err;
                }
                if(response.mail) {
                    obj.mail = response.mail;
                }
                res.render('pages/admin', obj);
            }
            else if(response.success_msg) {
                req.flash('success_msg', "user successfully updated");
                res.redirect('/admin');
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
            let response = await user.deleteUser(req.params.id);
            if(response.profile_img != 'no-image.png') {
                await image_handler.deleteImage(response.profile_img);
            }
            let recipient = response.email,
                subject = 'Profile deleted!',
                content = `
                            <p>
                                Hello ${response.name}
                                Your profile on http://localhost:3000/ was deleted by the site admin or one of his elven workers
                            </p>
                        `;
            let rows = await mailer.send_email(recipient, subject, content);
            req.flash('success_msg', "User deleted successfully");
            res.redirect('/admin');
        } catch (e) {
            console.log(e);
        }
    },
    getSingle: async (req, res) => {
        try {
            let _user = await user.getSingle(req.params.id);
            res.json(_user);
        }
        catch (err) {
            console.log(err);
        }
    },
    addSubscriber: async (req, res) => {
        try {
            let response = await newsletter.addSubscriber(req);
            let obj = await res_loader.admin_data();
            if(response.errors) {
                obj.errors = response.errors;
                obj.add_subscriber_body = req.body;
                obj.add_subscriber_body.params_id = req.params.id;
                obj.title = 'Admin';
                res.render('pages/admin', obj);
            }
            else if(response.user_err || response.mail) {
                obj.errors = response.errors;
                obj.add_subscriber_body = req.body;
                obj.add_subscriber_body.params_id = req.params.id;
                obj.mail = response.mail;
                obj.user_err = response.user_err;
                obj.title = 'Admin';
                res.render('pages/admin', obj);
            }
            else if(response.success_msg) {
                let recipient = req.body.email,
                    subject = 'Subscription added in your name!',
                    content = `
                                <p>
                                    <h1>Hello ${req.body.name}</h1>
                                    <p>You have now successfully subscribed to a newsletter!</p>
                                    If you regret this decision, you can unsubscribe here: 
                                    <a href="http://localhost:3000/newsletter/unsubscribe/${req.body.email}">Unsubscribe!</a>
                                </p>
                            `;
                let rows = await mailer.send_email(recipient, subject, content);
                req.flash('success_msg', 'Subscriber added succesfully!');
                res.redirect('/admin');
            }
        }
        catch (err) {
            console.log(err);
        }
    },
    removeSubscriber: async (req, res) => {
        try {
            let response = await newsletter.removeSubscriber(req.params.id);
            let recipient = response.email,
                subject = 'Subscription removed!',
                content = `
                            <p>
                                <h1>Hello ${response.name}</h1>
                                <p>You have now successfully been unsubscribed from a newsletter!</p>
                            </p>
                        `;
            let rows = await mailer.send_email(recipient, subject, content);
            req.flash('success_msg', 'The subscriber has been successfully removed!');
            res.redirect('/admin');
        }
        catch (err) {
            console.log(err);
        }
    }
}