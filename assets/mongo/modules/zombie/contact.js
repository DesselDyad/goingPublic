const contact = require('../mongo_modules/contact');
const user = require('../mongo_modules/user');
const role = require('../mongo_modules/role');
const newsletter = require('../mongo_modules/newsletter');
const crumbs = require('../../JSON/json_modules/crumbs');
const image_handler = require('../../services/image_handler');
const logger = require('../../services/logger');
const mailer = require('../../services/mailer');
const css_loader = require('../../services/css_loader');
const js_loader = require('../../services/js_loader');

module.exports = {
    submitForm: async (req, res) => {
        try {
            let sheets = await css_loader.read_css_sheets();
            let scripts = await js_loader.read_scripts();
            const _crumbs = await crumbs.getAll();
            let response = await contact.submitForm(req);
            if(response.errors) {
                res.render('pages/contact', {
                    "title": 'Contact',
                    "sheets": sheets,
                    "scripts": scripts,
                    "crumbs": _crumbs,
                    'errors': response.errors
                });
            }
            else if(response.success_msg) {
                req.flash('success_msg', 'Message sent succesfully!');
                res.redirect('/contact');
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}