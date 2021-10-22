const search = require('../mongo/modules/search');

module.exports = (app) => {
    //search routes
    app.post('/search', search.getAll);
    app.get('/search/live_search/:search_param', search.live_search);
    app.get('/search/getSingleUser/:id', search.getSingleUser);
    app.post('/search/advanced', search.advanced);
}