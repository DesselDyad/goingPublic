module.exports = app => {
    require('./public/fish_species')(app);
    require('./public/fish')(app);
    require('./public/location')(app);
     require('./private/admin')(app);
    // require('./private/subscriber')(app);
}