const express = require('express');
const router = express.Router();

const holaController = require('../Controllers/holaController');


router.get('/hola/:id', holaController);

module.exports = router;