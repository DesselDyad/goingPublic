const Validator = require('../../services/validator');

/**
 * @module Validator
 */
module.exports = {
    /**
     * validates a users username
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    isUsernameValid: async (req, res) => {
        try {
            let rows = await Validator.isUsernameValid(req.params.username);
            res.status(200).json(rows);
        } catch (e) {
            console.log(e);
        }
    },
    /**
     * validates a users email
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    isEmailValid: async (req, res) => {
        try {
            let response = await Validator.isEmailValid(req.params.email);
            res.send(response);
        } catch (e) {
            console.log(e);
        }
    },
    /**
     * validates a users temporary password
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    validate_temporary_password: async (req, res) => {
        try {
            let response = await Validator.validate_temporary_password(req.body.email, req.body.temp_password);
            res.status(200).send(response);
        } catch (e) {
            console.log(e);
        }
    }
}