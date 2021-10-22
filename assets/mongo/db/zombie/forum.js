const Forum = require('../../../models/zombie/forum');
const SubForum = require('../../../models/zombie/sub_forum');
const Thread = require('../../../models/zombie/thread');
const Post = require('../../../models/zombie/post');
const User = require('../../../models/global/user');
const mongoose = require('mongoose');

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            Forum.find({})
                .populate({
                    path: 'sub_forums',
                    populate: [{
                        path: 'threads',
                        model: 'Thread',
                        populate: [{
                            path: 'posts',
                            model: 'Post',
                            select: 'created',
                            options: {
                                sort: {
                                    created: 1
                                }
                            }
                        },
                        {
                            path: 'creator',
                            model: 'User'
                        }]
                    },
                    {
                        path: 'lastUpdate.post',
                        model: 'Post',
                        populate: {
                            path: 'author',
                            model: 'User'
                        }
                    },
                    {
                        path: 'lastUpdate.thread',
                        model: 'Thread',
                        populate: {
                            path: 'creator',
                            model: 'User'
                        }
                    }]
                })
                .exec()
                .then(forums => {
                    resolve(forums);
                })
                .catch(e => {
                    reject(e);
                })
        })
    },
    loadSingleForum: id => {
        return new Promise((resolve, reject) => {
            Forum.find({ _id: id })
                .populate({
                    path: 'sub_forums',
                    populate: [{
                        path: 'threads',
                        model: 'Thread',
                        populate: [{
                            path: 'posts',
                            model: 'Post',
                            select: 'created',
                            options: {
                                sort: {
                                    created: 1
                                }
                            }
                        },
                        {
                            path: 'creator',
                            model: 'User'
                        }]
                    },
                    {
                        path: 'lastUpdate.post',
                        model: 'Post',
                        populate: {
                            path: 'author',
                            model: 'User'
                        }
                    },
                    {
                        path: 'lastUpdate.thread',
                        model: 'Thread',
                        populate: {
                            path: 'creator',
                            model: 'User'
                        }
                    }]
                })
                .exec()
                .then(forums => {
                    resolve(forums);
                })
                .catch(e => {
                    reject(e);
                })
        })
    },
    getParentForum: id => {
        return new Promise((resolve, reject) => {
            Forum.find({
                title: 'Zombie'
            })
            .exec()
            .then(forum => {
                if(forum[0].sub_forums.indexOf(id) > -1) {
                    resolve("Zombie");
                } else {
                    resolve('Other');
                }
            })
            .catch(e => {
                reject(e);
            })
        })
    },
    loadSingleSubForum: id => {
        return new Promise((resolve, reject) => {
            SubForum.find({ _id: id })
                .populate({
                    path: 'threads',
                    model: 'Thread',
                    populate: [{
                        path: 'posts',
                        model: 'Post'
                    },
                    {
                        path: 'creator',
                        model: 'User'
                    },
                    {
                        path: 'lastUpdate',
                        model: 'Post',
                        populate: {
                            path: 'author',
                            model: 'User'
                        }
                    }]
                })
                .exec()
                .then(forums => {
                    resolve(forums);
                })
                .catch(e => {
                    reject(e);
                })
        })
    },
    getParentSubForum: id => {
        return new Promise((resolve, reject) => {
            SubForum.find({threads: id})
            .exec()
            .then(sub_forum => {
                resolve(sub_forum);
            })
            .catch(e => {
                reject(e);
            })
        })
    },
    loadSingleThread: id => {
        return new Promise((resolve, reject) => {
            Thread.find({ _id: id })
                .populate([{
                    path: 'posts',
                    model: 'Post',
                    populate: {
                        path: 'author',
                        model: 'User'
                    }
                },
                {
                    path: 'creator',
                    model: 'User'
                }])
                .exec()
                .then(thread => {
                    resolve(thread);
                })
                .catch(e => {
                    reject(e);
                })
        })
    },
    newPost: req => {
        return new Promise((resolve, reject) => {
            let content = req.body.post;
            req.checkBody('post', 'Post content can not be empty!').notEmpty();
            if (req.validationErrors()) {
                resolve({
                    errors: req.validationErrors()
                })
            } else {
                //create post
                let newPost = new Post({
                    author: req.session.passport.user,
                    'content': content
                })
                newPost.save(newPost, (err, post_created) => {
                    if (err) reject(err);
                    //update thread 'last updated'
                    Thread.updateOne({ _id: req.params.id }, {
                        $push: {
                            posts: new mongoose.mongo.ObjectID(post_created._id)
                        },
                        $set: {
                            lastUpdate: new mongoose.mongo.ObjectID(post_created._id)
                        }
                    },
                        (err, thread) => {
                            if (err) reject(err);
                            //update subforum 'last updated'
                            SubForum.updateOne({
                                $push: {
                                    threads: new mongoose.mongo.ObjectID(thread._id)
                                },
                                $set: {
                                    'lastUpdate.posts': post_created._id,
                                    'lastUpdate.thread': thread._id
                                }
                            },
                            (err, res) => {
                                if (err) reject(err);
                                User.updateOne({_id: req.session.passport.user},
                                    {
                                        $inc: {
                                            'local.forum.postCount': 1
                                        }
                                    },
                                    (err, res) => {
                                        if(err) reject(err);
                                        resolve({
                                            success_msg: 'You have successfully added a new post!'
                                        })
                                    })
                            })
                        })
                })
            }
        })
    },
    newThread: req => {
        return new Promise((resolve, reject) => {
            let title = req.body.title,
                post = req.body.post;

            req.checkBody('title', 'The title cant be empty!').notEmpty();
            req.checkBody('post', 'The post going along cant be empty!').notEmpty();

            if (req.validationErrors()) {
                resolve({
                    errors: req.validationErrors()
                })
            } else {
                Thread.find({ title: title })
                    .exec()
                    .then(thread => {
                        if (thread.length > 0) {
                            resolve({
                                thread_error: 'A thread with that name already exists!'
                            })
                        } else {
                            let newPost = new Post({
                                author: req.session.passport.user,
                                content: post
                            })
                            newPost.save(newPost, (err, post_created) => {
                                if (err) reject(err);
                                let newThread = new Thread({
                                    title: title,
                                    posts: [post_created._id],
                                    creator: req.session.passport.user,
                                    lastUpdate: new mongoose.mongo.ObjectId(post_created._id)
                                })
                                newThread.save(newThread, (err, thread_created) => {
                                    if (err) reject(err);
                                    SubForum.updateOne({ _id: req.params.id }, {
                                        $push: {
                                            threads: thread_created._id
                                        },
                                        $set: {
                                            'lastUpdate.post': post_created._id,
                                            'lastUpdate.thread': thread_created._id
                                        }
                                    },
                                        (err, res) => {
                                            if (err) reject(err);
                                            User.updateOne({_id: req.session.passport.user},
                                                {
                                                    $inc: {
                                                        'local.forum.postCount': 1,
                                                        'local.forum.threadCount': 1
                                                    }
                                                },
                                                (err, res) => {
                                                    if(err) reject(err);
                                                    resolve({
                                                        success_msg: 'Post & Thread have been successfully added!',
                                                        thread_id: thread_created._id
                                                    })
                                                })
                                        })
                                })
                            })
                        }
                    })
                    .catch(e => {
                        reject(e)
                    })
            }
        })
    }
}