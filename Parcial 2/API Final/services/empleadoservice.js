const pool = require('../config/db');

//  para obtener datos
const obtenerTodosLosEmpleados = async () => {
    const [rows] = await pool.query('SELECT * FROM empleado');
    return rows;
};

//  para insertar datos
const insertarEmpleado = async (datosEmpleado) => {
    const { nombre, apellidos, fecha_ingreso, fecha_nacimiento, correo, telefono, sueldo_diario, id_departamento, id_sucursal } = datosEmpleado;
    
    const query = `
        INSERT INTO empleado 
        (nombre, apellidos, fecha_ingreso, fecha_nacimiento, correo, telefono, sueldo_diario, id_departamento, id_sucursal) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const valores = [nombre, apellidos, fecha_ingreso, fecha_nacimiento, correo, telefono, sueldo_diario, id_departamento, id_sucursal];
    
    const [result] = await pool.query(query, valores);
    
    // Devolvemos el objeto formado con su nuevo ID autogenerado
    return {
        id_empleado: result.insertId,
        ...datosEmpleado
    };
};

module.exports = { obtenerTodosLosEmpleados, insertarEmpleado };