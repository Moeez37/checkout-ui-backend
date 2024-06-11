const express = require('express');
const router = express.Router();
const { discountBtnClick } = require('../controllers/checkout-ui.controller');

router.post('/discount-btn-click', discountBtnClick)

module.exports = router