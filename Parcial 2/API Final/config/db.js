const mysql = require('mysql2/promise');

// console.log("Mi URL de conexión es:", process.env.MYSQL_URL);

// Creamos un pool de conexiones usando la URL de Railway
const pool = mysql.createPool(process.env.MYSQL_URL);

// Comprobación de conexión
pool.getConnection()
    .then(connection => {
        console.log('🟢 Conectado exitosamente a la base de datos MySQL en Railway');
        connection.release();
    })
    .catch(err => console.error('🔴 Error conectando a la base de datos:', err));

module.exports = pool;