const express = require('express');
const notesCtrl = require('../controllers/notes');
const router = express.Router();

// Router to the root route. that is localhost:3002
router.get('/cards/:id/notes/new', notesCtrl.new);

module.exports = router;