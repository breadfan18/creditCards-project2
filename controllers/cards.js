const Cards = require('../models/card');

module.exports = {
    index,
    new: newCard
}

function index(req, res) {
    res.render('cards/index');
}

function newCard(req, res) {
    res.render('cards/new');
}