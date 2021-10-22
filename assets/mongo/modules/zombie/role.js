const role = require('../mongo_modules/role');

/**
 * @module Role
 */
module.exports = {
    /**
     * gets all roles
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    getAll: async (req, res) => {
        try {
            const roles = await role.getAll();
            res.send(roles);
        } catch (e) {
            console.log(e);
        }
    }
}