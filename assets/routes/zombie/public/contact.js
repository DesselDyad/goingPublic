const contact = require('../../../mongo/modules/global/contact');

module.exports = (app) => {
    // Contact routes
    app.post('/contact/submitForm', contact.submitForm);
    
}