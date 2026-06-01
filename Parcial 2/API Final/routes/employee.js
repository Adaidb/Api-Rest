const express = require('express');
const router = express.Router();
const { getEmpleados, createEmpleado,deleteEmpleado } = require('../controllers/empleado');

router.get('/', getEmpleados);
router.post('/', createEmpleado);
router.delete('/:id', deleteEmpleado);

module.exports = router;