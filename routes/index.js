const router = require('express').Router();
const indexCtrl = require('../controllers/index');
const passport = require('passport');

// Router to the root route. that is localhost:3002
router.get('/', indexCtrl.index);
router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/oauth2callback', passport.authenticate('google', {
    successRedirect: '/cards',
    failureRedirect: '/'
}));

//logout route
router.get('/logout', function (req, res) {
    req.logOut();
    res.redirect('/');
})

module.exports = router;