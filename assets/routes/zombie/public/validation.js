const validator = require('../../../mongo/modules/global/validator');

module.exports = (app) => {
    //validation routes
    app.post('/validator/validate_temporary_password', validator.validate_temporary_password);
    app.get('/validator/isEmailValid/:email', validator.isEmailValid);
    app.get('/validator/isUsernameValid/:username', validator.isUsernameValid);
}