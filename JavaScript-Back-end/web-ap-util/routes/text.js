const express = require('express');
const router = express.Router();
const textController = require('../controllers/textController');

router.post('/:action', textController.processText);

module.exports = router;
