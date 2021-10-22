const advertisements = require('../../../mongo/modules/svende/advertisement');

module.exports = app => {
    //get single advertisements & advertisement prices
    app.get('/ad/getSingle/:id', advertisements.getSingle);
    app.get('/ad/getSinglePrice/:id', advertisements.getSinglePrice);
}