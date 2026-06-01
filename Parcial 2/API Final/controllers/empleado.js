const empleadoService = require('../services/empleadoservice');

const getEmpleados = async (req, res) => {
    try {
        // El controlador delega el trabajo pesado al servicio
        const empleados = await empleadoService.obtenerTodosLosEmpleados();
        res.status(200).json(empleados);
    } catch (error) {
        console.error("Error en getEmpleados:", error);
        res.status(500).json({ error: 'Error interno al obtener los empleados' });
    }
};

const createEmpleado = async (req, res) => {
    // 1. Validaciones HTTP (El controlador decide si la petición es válida)
    const { nombre, apellidos, correo } = req.body;
    if (!nombre || !apellidos || !correo) {
        return res.status(400).json({ error: 'Nombre, apellidos y correo son obligatorios' });
    }

    try {
        // 2. Ejecutar la lógica de negocio a través del servicio
        const nuevoEmpleado = await empleadoService.insertarEmpleado(req.body);
        
        // 3. Responder al cliente
        res.status(201).json(nuevoEmpleado);
    } catch (error) {
        console.error("Error en createEmpleado:", error);
        res.status(500).json({ error: 'Error interno al crear el empleado' });
    }
};

const deleteEmpleado = async (req, res) => {
    const { id } = req.params;

    try {
        const filasAfectadas = await empleadoService.eliminarEmpleado(id);
        
        // Si no se afectó ninguna fila, el empleado no existía
        if (filasAfectadas === 0) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        res.status(200).json({ message: `Empleado con ID ${id} eliminado exitosamente` });
    } catch (error) {
        console.error("Error en deleteEmpleado:", error);
        res.status(500).json({ error: 'Error interno al eliminar el empleado' });
    }
};

module.exports = { getEmpleados, createEmpleado, deleteEmpleado  };