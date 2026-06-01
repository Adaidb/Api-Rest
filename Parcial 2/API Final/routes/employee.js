const express = require('express');
const router = express.Router();
const { getEmpleados, createEmpleado } = require('../controllers/empleado');

router.get('/', getEmpleados);
router.post('/', createEmpleado);

module.exports = router;