const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = {
    new: addNewUser
}

function addNewUser(req, res) {
    res.render('users/new');
}

