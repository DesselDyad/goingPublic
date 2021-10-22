const search = require('../../../mongo/modules/svende/search');

module.exports = (app) => {
    //searching route
    app.post('/search', search.search);
}