const forum = require('../../db/zombie/forum');

const res_loader = require('../../../services/res_loader');

module.exports = {
    newThread: async (req, res) => {
        try {
            let response = await forum.newThread(req);
            if(response.errors) {
                req.flash('error_msg', response.errors);
                res.redirect('/forum/sub_forum/' + req.params.id);
            } else if(response.thread_error) {
                req.flash('error_msg', response.thread_error);
                res.redirect('/forum/sub_forum/' + req.params.id);
            } else if(response.success_msg) {
                req.flash('success_msg', response.success_msg);
                res.redirect('/forum/sub_forum/thread/' + response.thread_id);
            }
        }
        catch (e) {
            console.log(e);
        }
    },
    newPost: async (req, res) => {
        try {
            let response = await forum.newPost(req);
            if(response.errors) {
                req.flash('error_msg', response.errors);
                res.redirect('/forum/sub_forum/thread/' + req.params.id);
            } else if(response.thread_error) {
                req.flash('error_msg', response.post_error);
                res.redirect('/forum/sub_forum/thread' + req.params.id);
            } else if(response.success_msg) {
                req.flash('success_msg', response.success_msg);
                res.redirect('/forum/sub_forum/thread/' + req.params.id);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}