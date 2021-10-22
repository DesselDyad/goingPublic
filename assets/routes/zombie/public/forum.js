const forum = require('../../../mongo/modules/zombie/forum');
const security = require('../../../services/security');

module.exports = app => {
    app.post('/forum/threads/addNew/:id', security.ensureAuthenticated, forum.newThread);
    app.post('/forum/threads/newPost/:id', security.ensureAuthenticated, forum.newPost);
}