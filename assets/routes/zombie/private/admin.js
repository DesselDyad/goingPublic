const admin = require('../../../mongo/modules/zombie/admin');
const navigation = require('../../../mongo/modules/zombie/navigation');
const security = require('../../../services/security');
const multer = require("multer");
const upload = multer({
    dest: "./temp/images/"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

module.exports = (app) => {
	// User Admin routes
	app.get('/zombiemania/admin', security.ensureAuthenticated, navigation.loadAdminPage);
	app.post('/admin/addUser', security.ensureAuthenticated, upload.single('userImage'), admin.addUser);
    app.get('/admin/deleteUser/:id', security.ensureAuthenticated, admin.deleteUser);
    app.get('/admin/getSingle/:id', security.ensureAuthenticated, admin.getSingle);
    app.post('/admin/updateUser/:id', security.ensureAuthenticated, upload.single('userImage'), admin.updateUser);

    //Subscriber admin routes
    app.post('/newsletter/addSubscriber', security.ensureAuthenticated, admin.addSubscriber);
    app.get('/newsletter/removeSubscriber/:id', security.ensureAuthenticated, admin.removeSubscriber);
}
