const fish_species = require('../../db/fish/fish_species');
const image_handler = require('../../../services/image_handler');
const res_loader = require('../../../services/res_loader');


module.exports = {
    getSingleFishSpecies: async (req, res) => {
        try {
            let _fish_species = await fish_species.getSingle(req.params.id);
            res.send(_fish_species);
        } catch (e) {
            console.log(e);
        }
    },
    getAllFishSpecies: async (req, res) => {
        try {
            let _fish_species = await fish_species.getAll();
            res.send(_fish_species);
        } catch (e) {
            console.log(e);
        }
    },
    addFishSpecies: async (req, res) => {
        try {
            let obj = await res_loader.admin_data();
            obj.title = 'Admin';
            let fileNames;
            if(req.files.length > 0) {
                fileNames = await image_handler.uploadFishSpeciesImages(req.files);
            }
            let response = await fish_species.addFishSpecies(req, fileNames);
            if(response.errors) {
                obj.errors = response.errors;
                obj.add_fish_species_body = req.body;
                res.render('pages/admin', obj);
            }
            else if(response.fish_species_err) {
                obj.add_fish_species_body = req.body;
                obj.error_msg = response.fish_species_err;
                res.render('pages/admin', obj);
            }
            else if(response.success_msg) {
                req.flash('success_msg', "Fish species added!");
                res.redirect('/admin');
            }
        }
        catch (err) {
            console.log(err);
        }
    },
    updateFishSpecies: async (req, res) => {
        try {
            let fileNames;
            if(req.files.length > 0) {
                fileNames = await image_handler.uploadFishSpeciesImages(req.files);
            }
            let response = await fish_species.updateFishSpecies(req, req.params.id, fileNames);
            let obj = await res_loader.admin_data();
            obj.title = 'Admin';
            if(response.errors) {
                obj.errors = response.errors;
                obj.update_fish_species_body = req.body;
                res.render('pages/admin', obj);
            }
            else if(response.fish_species_err) {
                obj.update_fish_species_body = req.body;
                obj.error_msg = response.fish_species_err;
                res.render('pages/admin', obj);
            }
            else if(response.success_msg) {
                req.flash('success_msg', "Fish species added!");
                res.redirect('/admin');
            }
        }
        catch (err) {
            console.log(err);
        }
    },
    deleteFishSpecies: async (req, res) => {
        try {
            let imageNames = await fish_species.deleteFishSpecies(req.params.id);
            await image_handler.deleteFishSpeciesImages(imageNames);
            req.flash('success_msg', "You successfully deleted the species!");
            res.redirect('/admin');
        } catch (e) {
            console.log(e);
        }
    },
    addFishSpeciesImages: async (req, res) => {
        try {
            let imageNames = await image_handler.uploadFishSpeciesImages(req.files);
            let response = await fish_species.addFishSpeciesImages(imageNames, req.params.id);
            req.flash('success_msg', response.success_msg);
            res.redirect('/admin');
        } catch (e) {
            console.log(e);
        }
    },
    deleteImages: async (req, res) => {
        try {
            let response = await fish_species.deleteImages(req.body.images, req.params.id);
            await image_handler.deleteFishSpeciesImages(req.body.images);
            res.send('success!');
        } catch (e) {
            console.log(e);
        }
    },
    getFishSpeciesData: async (req, res) => {
        try {
            let fish_species_data = await fish_species.getFishSpeciesData();
            res.send(fish_species_data);
        } catch (e) {
            console.log(e);
        }
    },
}