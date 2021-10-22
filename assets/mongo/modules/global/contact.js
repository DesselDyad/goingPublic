const contact = require('../../db/global/contact');
const crumbs = require('../../../json/json_modules/crumbs');
const css_loader = require('../../../services/css_loader');
const js_loader = require('../../../services/js_loader');

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