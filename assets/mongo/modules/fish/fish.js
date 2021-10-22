const fish = require('../../db/fish/fish');
const image_handler = require('../../../services/image_handler');
const res_loader = require('../../../services/res_loader');


module.exports = {
    getSingleFish: async (req, res) => {
        try {
            let _fish = await fish.getSingle(req.params.id);
            res.send(_fish);
        } catch (e) {
            console.log(e);
        }
    },
    getAllFish: async (req, res) => {
        try {
            let _fish = await fish.getAll();
            res.send(_fish);
        } catch (e) {
            console.log(e);
        }
    },
    addFish: async (req, res) => {
        try {
            let obj = await res_loader.admin_data();
            obj.title = 'Admin';
            let fileNames;
            if(req.files.length > 0) {
                fileNames = await image_handler.uploadFishImages(req.files);
            }
            let response = await fish.addFish(req, fileNames);
            if(response.errors) {
                obj.errors = response.errors;
                obj.add_fish_body = req.body;
                res.render('pages/admin', obj);
            }
            else if(response.fish_err) {
                obj.add_fish_body = req.body;
                if(fileNames) {
                    obj.fish_images = fileNames;
                } else {
                    obj.fish_images = [];
                }
                obj.fish_err = response.fish_err;
                res.render('pages/admin', obj);
            }
            else if(response.success_msg) {
                req.flash('success_msg', "Fish added!");
                console.log("req.headers.referer", req.headers.referer);
                if(req.headers.referer.includes("/admin"))
                {
                    res.redirect('/admin');
                } else {
                    res.redirect('/user/profile')
                }
            }
        }
        catch (err) {
            console.log(err);
        }
    },
    updateFish: async (req, res) => {
        try {
            let obj = res_loader.admin_data();
            obj.title = 'Admin';
            let fileNames;
            if(req.file) {
                fileNames = await image_handler.uploadImage(req.file);
            }
            let response = await fish.updateFish(req, req.params.id, fileNames);
            if(response.errors) {
                obj.errors = response.errors;
                obj.update_fish_body = req.body;
                res.render('pages/admin', obj);
            }
            else if(response.fish_err) {
                obj.update_fish_body = req.body;
                obj.fish_err = response.fish_err;
                res.render('pages/admin', obj);
            }
            else if(response.success_msg) {
                req.flash('success_msg', "Fish updated!");
                if(req.headers.referer.includes("/admin"))
                {
                    res.redirect('/admin');
                } else {
                    res.redirect('/user/profile')
                }
            }
        }
        catch (err) {
            console.log(err);
        }
    },
    deleteFish: async (req, res) => {
        try {
            let fileNames = await fish.deleteFish(req.params.id);
            await image_handler.deleteFishImages(fileNames);
            req.flash('success_msg', "You successfully deleted the fish!");
            res.redirect('/');
        } catch (e) {
            console.log(e);
        }
    },
    addFishImages: async (req, res) => {
        try {
            console.log(req.files);
            let imageNames = await image_handler.uploadFishImages(req.files);
            let response = await fish.addFishImages(imageNames, req.params.id);
            req.flash('success_msg', response.success_msg);
            if(req.headers.referer.includes("/admin"))
            {
                res.redirect('/admin');
            } else {
                res.redirect('/user/profile')
            }
        } catch (e) {
            console.log(e);
        }
    },
    deleteImages: async (req, res) => {
        try {
            let response = await fish.deleteImages(req.body.images, req.params.id);
            await image_handler.deleteFishImages(req.body.images);
            res.send('success!');
        } catch (e) {
            console.log(e);
        }
    },
    getDistinctDates: async (req, res) => {
        try {
            let distinct_dates = await fish.getDistinctDates();
            res.send(distinct_dates);
        } catch (e) {
            console.log(e);
        }   
    },
    getFishRecordsData: async (req, res) => {
        try {
            let records = await fish.getFishRecordsData();
            res.send(records);
        } catch (e) {
            console.log(e);
        }   
    }
}