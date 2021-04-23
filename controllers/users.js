const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = {
    new: addNewUser,
    create,
    delete: deleteUser
}

function addNewUser(req, res) {
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

function deleteUser(req, res) {
    User.findByIdAndDelete(req.params.id, function (err, user) {
        res.redirect('/users/new');
    })
}