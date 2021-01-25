const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController')

/* GET users listing. */
router.get('/detail/:id/:category', productsController.detail);

module.exports = router;
