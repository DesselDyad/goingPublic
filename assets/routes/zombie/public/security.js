const security = require('../../../mongo/modules/global/security');

module.exports = (app) => {
    app.get('/security/sendNewPassword/:email', security.sendNewPassword);
    app.post('/security/updatePassword/:email', security.updatePassword);
    app.post('/security/resendPassword', security.resendPassword);
}