const express = require('express');
const router = express.Router();

const holaController = require('../Controllers/holaController');


router.get('/hola', holaController);

module.exports = router;