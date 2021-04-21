const Card = require('../models/card');

module.exports = {
    new: newNote
}

function newNote(req, res) {
    Card.findById(req.params.id, function (err, card) {
        card.notes.push(req.body);
        card.save(function (err) {
            res.redirect(`/cards/${card._id}`);
        })
    })
}

