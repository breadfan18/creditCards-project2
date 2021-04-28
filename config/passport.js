const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Admin = require('../models/admin');

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    function (accessToken, refreshToken, profile, cb) {
        Admin.findOne({'googleId': profile.id}, function (err, admin) {
            if (err) return cb(err);
            if (admin){
                return cb(null, admin);
            } else {
                const newAdmin = new Admin({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id
                });
                newAdmin.save(function (err) {
                    if(err) return cb(err);
                    return cb(null, newAdmin);
                });
            }
        });
    }
));

passport.serializeUser(function (admin, done) {
    done(null, admin.id)
})

passport.deserializeUser(function (id, done) {
    Admin.findById(id, function (err, admin) {
        done(err, admin);
    });
});