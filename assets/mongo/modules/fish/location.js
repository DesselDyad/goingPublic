const location = require('../../db/fish/location');
const image_handler = require('../../../services/image_handler');
const res_loader = require('../../../services/res_loader');


module.exports = {
    getSingleLocation: async (req, res) => {
        try {
            let _location = await location.getSingle(req.params.id);
            res.send(_location);
        } catch (e) {
            console.log(e);
        }
    },
    getAllLocations: async (req, res) => {
        try {
            let locations = await location.getAll();
            res.send(locations);
        } catch (e) {
            console.log(e);
        }
    },
    getSingleLocationImages: async (req, res) => {
        try {
            let images = await location.getSingleLocationImages(req.params.id);
            res.send(images);
        } catch (e) {
            console.log(e);
        }
    },
    addLocation: async (req, res) => {
        try {
            let fileNames;
            if(req.files.length > 0) {
                fileNames = await image_handler.uploadLocationImages(req.files);
            }
            let response = await location.addLocation(req, fileNames);
            let obj = await res_loader.admin_data();
            obj.title = 'Admin';
            if(response.errors) {
                obj.errors = response.errors;
                obj.add_location_body = req.body;
                res.render('pages/admin', obj);
            }
            else if(response.location_err) {
                obj.add_location_body = req.body;
                obj.error_msg = response.location_err;
                res.render('pages/admin', obj);
            }
            else if(response.success_msg) {
                req.flash('success_msg', response.success_msg);
                res.redirect('/admin');
            }
        }
        catch (err) {
            console.log(err);
        }
    },
    updateLocation: async (req, res) => {
        try {
            let fileNames;
            if(req.files.length > 0) {
                fileNames = await image_handler.uploadLocationImages(req.file);
            }
            let response = await location.updateLocation(req, req.params.id, fileNames);
            let obj = await res_loader.admin_data();
            obj.title = 'Admin';
            if(response.errors) {
                obj.errors = response.errors;
                obj.update_location_body = req.body;
                res.render('pages/admin', obj);
            }
            else if(response.fish_err) {
                obj.update_location_body = req.body;
                obj.fish_err = response.fish_err;
                res.render('pages/admin', obj);
            }
            else if(response.success_msg) {
                req.flash('success_msg', response.success_msg);
                res.redirect('/admin');
            }
        }
        catch (err) {
            console.log(err);
        }
    },
    deleteLocation: async (req, res) => {
        try {
            let imageNames = await location.deleteLocation(req.params.id);
            await image_handler.deleteLocationImages(imageNames);
            req.flash('success_msg', "You successfully deleted the location!");
            res.redirect('/admin');
        } catch (e) {
            console.log(e);
        }
    },
    addLocationImages: async (req, res) => {
        try {
            let imageNames = await image_handler.uploadLocationImages(req.files);
            let response = await location.addLocationImages(imageNames, req.params.id);
            req.flash('success_msg', response.success_msg);
            res.redirect('/admin');
        } catch (e) {
            console.log(e);
        }
    },
    deleteImages: async (req, res) => {
        try {
            let response = await location.deleteImages(req.body.images, req.params.id);
            await image_handler.deleteLocationImages(req.body.images);
            res.send('success!');
        } catch (e) {
            console.log(e);
        }
    },
    getLocationsData: async (req, res) => {
        try {
            let locations_data = await locations.getLocationsData();
            res.send(locations_data);
        } catch (e) {
            console.log(e);
        }
    },
}