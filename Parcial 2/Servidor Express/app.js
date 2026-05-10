// Importar express
const express = require('express');


const app = express();


const PORT = 3000;
const ApiRoutes = require('./routes/holaRoutes');
 
app.use('/api', ApiRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});