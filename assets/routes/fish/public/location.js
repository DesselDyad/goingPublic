const location = require('../../../mongo/modules/fish/location');
const security = require('../../../services/security');
const multer = require("multer");
const upload = multer({
    dest: "./temp/images/"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

module.exports = (app) => {
    // Fish admin routes
    app.post('/admin/location/deleteImages/:id', security.ensureAuthenticated, location.deleteImages);
    app.post('/admin/location/addLocationImages/:id', security.ensureAuthenticated, upload.array('add_location_images'), location.addLocationImages);
    app.post('/admin/location/addLocation', security.ensureAuthenticated, upload.array('location_images'), location.addLocation);
    app.post('/admin/location/updateLocation/:id', security.ensureAuthenticated, upload.array('location_images'), location.updateLocation);
    app.get('/admin/location/deleteLocation/:id', security.ensureAuthenticated, location.deleteLocation);
}