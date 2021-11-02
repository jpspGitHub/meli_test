const { get, query } = require('../controllers/product');
const express = require('express');
const router = express.Router();

router.get('/:id', get);
router.get('/', query);

module.exports = router;