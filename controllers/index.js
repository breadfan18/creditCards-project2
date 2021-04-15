const Cards = require('../models/card');

module.exports = {
    new: newView
}

function newView(req, res) {
    res.render('index');
    
}