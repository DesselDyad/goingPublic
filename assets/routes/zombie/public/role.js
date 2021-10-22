const role = require('../../../mongo/modules/global/role');

module.exports = (app) => {
    //role routes
    app.get('/role/getAll', role.getAll);
}