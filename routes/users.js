const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/new', usersCtrl.new);
router.post('/new', usersCtrl.create);

module.exports = router;

