const mongoose = require('mongoose');
const User = require('../models/user');
const Card = require('../models/card');


module.exports = {
    new: addNewUser,
    create,
    delete: deleteUser
}

function addNewUser(req, res) {
    User.find({}, function(err, users){
        Card.find({}, function (err, cards) {
            res.render('users/new', {
                users,
                cards,
                admin: req.user
            });
        })
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