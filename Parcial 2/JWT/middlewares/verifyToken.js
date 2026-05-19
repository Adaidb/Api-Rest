const jwt = require('jsonwebtoken');

const SECRET_KEY = 'asjdh18273hjsahd72h3h2h3hj2h3j';

function verifyToken(req, res, next) {

    const bearerHeader = req.headers['authorization'];

    if (!bearerHeader) {

        return res.status(403).json({
            mensaje: 'Token requerido'
        });
    }

    const token = bearerHeader.split(' ')[1];

    jwt.verify(token, SECRET_KEY, (err, datos) => {

        if (err) {

            return res.status(401).json({
                mensaje: 'Token invalido'
            });
        }

        req.usuario = datos;

        next();
    });
}

module.exports = verifyToken;