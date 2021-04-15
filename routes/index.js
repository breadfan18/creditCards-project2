const express = require('express');
const indexCtrl = require('../controllers/index');
const router = express.Router();

// Router to the root route. that is localhost:3002
router.get('/', indexCtrl.new);

module.exports = router;