const fish_species = require('../../../mongo/modules/fish/fish_species');
const security = require('../../../services/security');
const multer = require("multer");
const upload = multer({
    dest: "./temp/images/"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

module.exports = (app) => {
    // Fish species admin routes
    app.post('/admin/fish_species/deleteImages/:id', security.ensureAuthenticated, fish_species.deleteImages);
    app.post('/admin/fish_species/addFishSpeciesImages/:id', security.ensureAuthenticated, upload.array('add_fish_species_images'), fish_species.addFishSpeciesImages);
    app.post('/admin/fish_species/addFishSpecies', security.ensureAuthenticated, upload.array('fish_species_images'), fish_species.addFishSpecies);
    app.post('/admin/fish_species/updateFishSpecies/:id', security.ensureAuthenticated, upload.array('location_images'), fish_species.updateFishSpecies);
    app.get('/admin/fish_species/deleteFishSpecies/:id', security.ensureAuthenticated, fish_species.deleteFishSpecies);
}