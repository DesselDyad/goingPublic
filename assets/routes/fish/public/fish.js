const fish = require('../../../mongo/modules/fish/fish');
const security = require('../../../services/security');
const multer = require("multer");
const upload = multer({
    dest: "./temp/images/"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

module.exports = (app) => {
    // Fish admin routes
    app.post('/admin/fish/deleteImages/:id', security.ensureAuthenticated, fish.deleteImages);
    app.post('/admin/fish/addFishImages/:id', security.ensureAuthenticated, upload.array('add_fish_images'), fish.addFishImages);
    app.post('/admin/fish/addFish', security.ensureAuthenticated, upload.array('fish_images'), fish.addFish);
    app.post('/admin/fish/updateFish/:id', security.ensureAuthenticated, upload.array('fish_images'), fish.updateFish);
    app.get('/admin/fish/deleteFish/:id', security.ensureAuthenticated, fish.deleteFish);
}