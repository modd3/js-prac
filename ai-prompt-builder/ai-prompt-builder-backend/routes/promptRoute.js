const express = require('express');
const router = express.Router();
const { getPrompts, createPrompt } = require('../controllers/promptController');

router.get('/', getPrompts);
router.post('/', createPrompt);

module.exports = router;
