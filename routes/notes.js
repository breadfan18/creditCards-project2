const express = require('express');
const notesCtrl = require('../controllers/notes');
const router = express.Router();

router.post('/cards/:id/notes', notesCtrl.new);
router.delete('/cards/:id/notes/:notes_id', notesCtrl.delete);

module.exports = router;