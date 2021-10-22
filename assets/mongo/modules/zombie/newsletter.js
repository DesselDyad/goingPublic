const service_newsletter = require('../../services/newsletter');
const mongo_newsletter = require('../mongo_modules/newsletter');

/**
 * @module Newsletter
 */
module.exports = {
    /**
     * sends an email to a user requesting validation of a newsletter subscription
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    requestUserValidation: async (req, res) => {
        try {
            let response = await service_newsletter.requestUserValidation(req.body.name, req.body.email);
            req.flash('success_msg', "You successfully had an e-mail sent to you for further validation!");
            res.redirect('/');
        }
        catch (e) {
            console.log(e);
        }
    },
    /**
     * subscribes a user to the newsletter
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    subscribe: async (req, res) => {
        try {
            let response = await service_newsletter.subscribe(req.query.name, req.query.email);
            const rows = await mongo_newsletter.subscribe(req.query.name, req.query.email);
            req.flash('success_msg', "You successfully subscribed!");
            res.redirect('/');
        } catch (e) {
            console.log(e);
        }
    },
    /**
     * unsubscribes a user from a newsletter subscription
     * @param {object} req - the request object
     * @param {object} res - the response object
     */
    unsubscribe: async (req, res) => {
        try {
            let response = await service_newsletter.unsubscribe(req.params.email);
            const rows = await mongo_newsletter.unsubscribe(req.params.email);
            req.flash('success_msg', "You successfully un-subscribed!");
            res.redirect('/');
        } catch (e) {
            console.log(e);
        }
    }
}