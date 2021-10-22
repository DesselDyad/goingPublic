const categories = require('../../../mongo/modules/svende/categories');
const security = require('../../../services/security');

module.exports = app => {
    //updates category menu order
    app.post('/admin/updateCategories', security.ensureAuthenticated, categories.updateCategories);
}