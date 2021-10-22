const location = require('../../../mongo/modules/fish/location');

module.exports = (app) => {
    // Location routes
    app.get('/location/getSingleLocation/:id',  location.getSingleLocation);
    app.get('/location/getSingleLocationImages/:id',  location.getSingleLocationImages);
    app.get('/location/getAllLocations', location.getAllLocations);
}