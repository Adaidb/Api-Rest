const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '.env') });

const employee = require('./routes/employee');

const app = express();

app.use(cors());
app.use(express.json());

// Documentación Swagger
const swaggerPath = path.join(__dirname, 'docs', 'swagger.yaml');
const swaggerDocument = YAML.load(swaggerPath);

app.use('/apidoc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas
app.use('/api/empleados', employee);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
    console.log(`📄 Documentación en: http://localhost:${PORT}/apidoc`);
});
