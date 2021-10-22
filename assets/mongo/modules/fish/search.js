const search = require('../../db/fish/search');

/**
 * @module Util
 */
module.exports = {
    /**
     * sends a new temporary password to a user who has forgotten his existing one
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    getAll: async (req, res) => {
        try {
            let results = await search.getAll(req.body.param, req.ip.toString());
            res.render('pages/search', results);
        } catch (e) {
            console.log(e);
        }
    }
}