const security = require('../../services/security');

/**
 * @module Util
 */
module.exports = {
    /**
     * sends a new temporary password to a user who has forgotten his existing one
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    sendNewPassword: async (req, res) => {
        try {
            let rows = await security.sendNewPassword(req.params.email);
            res.json(rows);
        } catch (e) {
            console.log(e);
        }
    },
    /**
     * updates a users password
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    updatePassword: async (req, res) => {
        try {
            let rows = await security.updatePassword(req.body, req.params.email);
            // let rows = await util.loadAll();
            res.send(rows);
        } catch (e) {
            console.log(e);
        }
    },
    /**
     * resends a temporary password to a user who has taken too long to enter a new permanent one
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    resendPassword: async (req, res) => {
        try {
            let rows = await security.resendPassword(req.body);
            res.json(rows);
        } catch (e) {
            console.log(e);
        }
    }
}