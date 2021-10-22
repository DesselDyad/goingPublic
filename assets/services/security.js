const mailer = require('./mailer');
var bcrypt = require('bcryptjs');
const crypto = require('crypto');
const User = require('../models/global/user');
const Temporary_Password = require('../models/global/temp_pw');

/**
 * @module Security
 */
module.exports = {
    createPassword: (oldPW) => {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, function(err, salt) {
                if(err) reject(err);
                bcrypt.hash(oldPW, salt, function(err, newPW) {
                    if(err) reject(err);
                    resolve(newPW);
                });
            });
        })
    },
    hashPassword: (password) => {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, function(err, salt) {
                if(err) reject(err);
                bcrypt.hash(password, salt, function(err, hash) {
                    if(err) reject(err);
                    resolve(hash);
                });
            });
        })
    },
    
    comparePassword: (candidatePassword, hash, callback) => {
        bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
            if(err) callback(err);
            callback(null, isMatch);
        });
    },
    /**
     * Sends a temporary password to a user who has forgotten his
     * @param {string} email - the email of the user who has forgotten the password
     */
    sendNewPassword: (email) => {
        return new Promise(async (resolve, reject) => {
			var dateTime = require('node-datetime');
			var dt = dateTime.create();
            var formatted = dt.format('Y-m-d H:M:S');
            
            let s = crypto.randomBytes(10).toString('hex');
            bcrypt.genSalt(10, function(err, salt) {
                if(err) reject(err);
                bcrypt.hash(s, salt, function(err, newPW) {
                    if(err) reject(err);
                    let newTempPW = new Temporary_Password({
                        email: email,
                        password: newPW,
                        created: formatted
                    })
                    newTempPW.save(async (err, result) => {
                        if(err) reject(err);
                        else {
                            try {
                                let recipient = email,
                                    subject = 'Send New Temporary Password',
                                    content = `
                                                <p>
                                                    Here is your temporary password! Follow this link and use this password to create a new 
                                                    permanent one!
                                                </p>
                                                <p>
                                                    Use this password in the next 30 minutes!!: ${s}
                                                </p>
                                                <p>
                                                    <a href="http://localhost:3000/user/login?recover=${email}">
                                                        Follow this link to create the new password!
                                                    </a>
                                                </p>
                                            `;
                                let rows = await mailer.send_email(recipient, subject, content);
                                resolve(rows);
                            }
                            catch (e) {
                                reject(e);
                            }
                        }
                    });
                });
            });
        })
    },
    //basically checks for
    //if(req.session.passport.user)
    ensureAuthenticated: (req, res, next) => {
        if(req.isAuthenticated()){
            return next();
        } else {
            //safe original page header for redirection - more importantly, make that header accessible for the login route (if successfull login)
            req.session.redirectTo = req.route.path;
            req.flash('error_msg','You are not logged in');
            if(req.route.path.indexOf('zombie') > -1) {
                res.redirect('/zombie/user/login');
            } else {
                res.redirect('/fish/user/login');
            }
        }
    },
    //basically checks for
    //if(req.session.passport.user)
    svende_ensureAuthenticated: (req, res, next) => {
        if(req.isAuthenticated()){
            return next();
        } else {
            //safe original page header for redirection - more importantly, make that header accessible for the login route (if successfull login)
            req.flash('error_msg','You are not logged in');
            res.redirect('/apprenticeship_test/user/login');
        }
    },
    /**
     * Sends a temporary password to a user who has forgotten his
     * @param {object} body - the requests body, containing the new password the user has entered
     * @param {string} email - the email of the user who has forgotten the password
     */
    updatePassword: (body, email) => {
        return new Promise(async (resolve, reject) => {
            bcrypt.genSalt(10, function(err, salt) {
                if(err) reject(err);
                bcrypt.hash(body.new_password, salt, function(err, newPW) {
                    if(err) reject(err);
                    User.findOneAndUpdate({email: email}, {password: newPW}, (err, result) => {
                        if(err) reject(err);
                        Temporary_Password.findOneAndRemove({email:email}, (err, result) => {
                            if(err) reject(err);
                            resolve(result);
                        })
                    })
                });
            });
        })
    },
    /**
     * Sends a new temporary password to a user, if he has taken too long entering the previous one
     * @param {object} body - the requests body, containing the users email
     */
    resendPassword: (body) => {
        return new Promise(async (resolve, reject) => {
            Temporary_Password.findOneAndRemove({email:body.email}, async (err, result) => {
                if(err) reject(err);
                var dateTime = require('node-datetime');
                var dt = dateTime.create();
                var formatted = dt.format('Y-m-d H:M:S');
                
                let s = crypto.randomBytes(10).toString('hex');
                bcrypt.genSalt(10, function(err, salt) {
                    if(err) reject(err);
                    bcrypt.hash(s, salt, function(err, newPW) {
                        if(err) reject(err);
                        let newTempPW = new Temporary_Password({
                            email: body.email,
                            password: newPW,
                            created: formatted
                        })
                        newTempPW.save(async (err, result) => {
                            if(err) reject(err);
                            else {
                                try {
                                    let recipient = body.email,
                                        subject = 'Send New Temporary Password',
                                        content = `
                                                    <p>
                                                        Here is your temporary password! Follow this link and use this password to create a new 
                                                        permanent one!
                                                    </p>
                                                    <p>
                                                        Use this password in the next 30 minutes!!: ${s}
                                                    </p>
                                                    <p>
                                                        <a href="http://localhost:3000/user/login?recover=${body.email}">
                                                            Follow this link to create the new password!
                                                        </a>
                                                    </p>
                                                `;
                                    let rows = await mailer.send_email(recipient, subject, content);
                                    resolve(rows);
                                }
                                catch (e) {
                                    reject(e);
                                }
                            }
                        });
                    });
                });
            })
            
        })
    }
};