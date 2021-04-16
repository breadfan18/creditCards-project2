const Card = require('../models/card');

module.exports = {
    index,
    new: newCard,
    create
}

function index(req, res) {
    res.render('cards/index');
}

function newCard(req, res) {
    res.render('cards/new');
}

function create(req, res) {
    console.log(req.body);
}