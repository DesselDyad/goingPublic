let User = require('../models/global/user');
const datetime = require('node-datetime');
const Temporary_Password = require('../models/global/temp_pw');
const security = require('./security');

/**
 * @module Validator
 */
module.exports = class Validator {
    constructor () {
        
    }

    validatePhoneNumber(body, email) {
    }
    /**
     * validate_temporary_password
     * Validates a temporary password (whether or not it is correct, and whether or not is entered fast enough)
     * @param {string} temp_password - the temporary password
     * @param {string} email - the email
     */
    static validate_temporary_password(email, temp_password) {
        return new Promise((resolve, reject) => {
            Temporary_Password.find({email: email}, (err, temp_pw) => {
                if(err)reject(err);
                
                // 30 minutes * 60000 (60000 ms in 1 minute * 30 minutes)
                let timeRightNow = datetime.create()._created;
                let timeCreated = datetime.create(temp_pw[0].created).now();
                let diff = timeRightNow - timeCreated;
                let diff1 = diff / 60000; //minutes
                let diff2 = diff / ((30*60000)) - 1; //hours
                if(diff2 > 0.5) {
                    resolve({"response": "invalid"})
                    //valid
                    //compare passwords
                }
                else if (diff2 < 0.5) {
                    security.comparePassword(temp_password, temp_pw[0].password, (err, flag) => {
                        if(err)reject(err);
                        else {
                            if(flag) {
                                resolve({"response": "valid"})
                            }
                            else {
                                resolve({"response": "invalid"})
                            }
                        }
                    })
                }
            })
        })
    }
    /**
     * isEmailValid
     * Validates an email adress (whether or not there exists a user with that email adress)
     * @param {string} email - the email the be validated
     */
    static isEmailValid(email) {
        return new Promise((resolve, reject) => {
            User.findOne({email: email}, (err, user) => {
                if(err) reject(err);
                if(user == {} || user == null) {
                    resolve({"response":'invalid'});
                }
                else {
                    resolve({"response":'valid'});
                }
            })
        })
    }
    /**
     * isUsernameValid
     * Checks whether or not a username exists in the database
     * @param {string} username - the username to be validated
     */
    static isUsernameValid(username) {
        return new Promise((resolve, reject) => {
            connection.query(`  SELECT * 
                                FROM user 
                                WHERE username = '${username}'
                            `, (err, rows) => {
                            if(err) {reject(err);}
                            else if(rows.length >= 1) {
                                resolve('Username exists already, pick another!');
                            }
                            else if(rows.length == 0) {
                                resolve('Username is valid!');
                            }
                            else {
                                resolve('unknown error');
                            }
            })
        })
    }
}