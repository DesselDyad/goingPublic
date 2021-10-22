module.exports = app => {
    //routes for zombie site
    require('./zombie/private_index')(app);
    require('./zombie/public_index')(app);
    //routes for fishing site
    require('./fish/private_index')(app);
    require('./fish/public_index')(app);
    //routes for svendeprøve
    require('./svende/index')(app);
    //global routes (user, security etc)
    require('./global/private_index')(app);
}