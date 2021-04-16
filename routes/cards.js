const express = require('express');
const cardsCtrl = require('../controllers/cards');
const router = express.Router();

// Router to the root route. that is localhost:3002
router.get('/', cardsCtrl.index);
router.get('/new', cardsCtrl.new);
router.post('/', cardsCtrl.create);



module.exports = router;