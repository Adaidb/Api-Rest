const express = require('express');

const router = express.Router();
const auth = require('../controllers/autController');

const verifyToken = require('../middlewares/verifyToken');


// login
router.post('/login', auth.login);


// ruta protegida
router.get('/perfil', verifyToken, auth.perfil);


module.exports = router;