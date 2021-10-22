module.exports = app => {
    require('./private/navigation')(app);
    require('./private/fish_species')(app);
    require('./private/fish')(app);
    require('./private/location')(app);
    require('./private/search')(app);
}