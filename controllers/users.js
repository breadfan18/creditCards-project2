const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = {
    new: addNewUser,
    create
}

function addNewUser(req, res) {
    // res.render('users/new');
    User.find({}, function(err, users){
        res.render('users/new', {
            users
        });
    })
}

function create(req, res) {
    User.create(req.body, function(err, user){
        if(err) {
            console.log('could not add user');
            console.log(err);
        }
        res.redirect('/users/new');
    })
}