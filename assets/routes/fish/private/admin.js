const navigation = require('../../../mongo/modules/fish/navigation');
const security = require('../../../services/security');

module.exports = (app) => {
    // Fish species routes
    app.get('/fishbuddy/admin', security.ensureAuthenticated, navigation.loadAdminPage);
}