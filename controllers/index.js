const Cards = require('../models/card');

module.exports = {
    index
}

function index(req, res) {
    res.render('index', {
        user: req.user
    });
}