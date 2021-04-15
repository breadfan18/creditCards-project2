const Cards = require('../models/card');

module.exports = {
    index
}

function index(req, res) {
    res.render('cards/index');
}