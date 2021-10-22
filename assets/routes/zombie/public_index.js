module.exports = app => {
    require('./public/contact')(app);
    require('./public/navigation')(app);
    require('./public/newsletter')(app);
    require('./public/role')(app);
    require('./public/security')(app);
    require('./public/user')(app);
    require('./public/validation')(app);
    require('./public/authentication')(app);
    require('./public/forum')(app);
}