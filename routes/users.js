const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/new', usersCtrl.new);
router.post('/new', usersCtrl.create);
router.delete('/:id', usersCtrl.delete);

module.exports = router;

