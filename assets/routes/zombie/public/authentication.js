var user = require('../../../mongo/modules/global/user');
var passport = require('passport');

module.exports = app => {
  app.get('/auth/facebook',
    passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/user/login' }),
    function (req, res) {
      // Successful authentication, redirect home.
      req.flash('success_msg', 'You are now logged in - using facebook!')
      res.redirect('/user/profile');
    });
  app.get('/connect/facebook', passport.authorize('facebook', { scope: ['email'] }, (req, res) => {
    res.send('success');
  }))
  app.get('/unlink/facebook', user.unlinkFacebook)



  app.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }));

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/user/login' }),
    function (req, res) {
      // Successful authentication, redirect home.
      req.flash('success_msg', 'You are now logged in - using google!')
      res.redirect('/user/profile');
    });
  app.get('/connect/google', passport.authorize('google', { scope: ['email'] }, (req, res) => {
    res.send('success');
  }))
  app.get('/unlink/google', user.unlinkGoogle)



  app.get('/auth/github',
    passport.authenticate('github'));

  app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function (req, res) {
      // Successful authentication, redirect home.
      req.flash('success_msg', 'You are now logged in - using github!')
      res.redirect('/user/profile');
    });
    app.get('/connect/github', passport.authorize('github', { scope: ['email'] }, (req, res) => {
      res.send('success');
    }))
    app.get('/unlink/github', user.unlinkGithub)
}