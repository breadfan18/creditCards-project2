const Card = require('../models/card');

module.exports = {
    new: newNote,
    delete: deleteNote
}

function newNote(req, res) {
    Card.findById(req.params.id, function (err, card) {
        card.notes.push(req.body);
        card.save(function (err) {
            res.redirect(`/cards/${card._id}`);
        })
    })
}

function deleteNote(req, res) {
    console.log(req.params.id);
    console.log(req.params.notes_id);
    Card.findById(req.params.id, function (err, card) {
        card.notes.splice(card.notes.findIndex(note => note._id.equals(req.params.notes_id)), 1);
        card.save(function (err) {
            res.redirect(`/cards/${card._id}`);
        })
    })
}