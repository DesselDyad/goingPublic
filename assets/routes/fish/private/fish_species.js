const fish_species = require('../../../mongo/modules/fish/fish_species');

module.exports = (app) => {
    // Fish species routes
    app.get('/fish_species/getSingleFishSpecies/:id',  fish_species.getSingleFishSpecies);
    app.get('/fish_species/getAllFishSpecies', fish_species.getAllFishSpecies);
}