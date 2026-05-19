const jwt = require('jsonwebtoken');

const SECRET_KEY = 'asjdh18273hjsahd72h3h2h3hj2h3j';

exports.login = (req, res) => {

    const { username, password } = req.body || {};

    console.log(req.body);
    
    if (username !== 'adai' || password !== '1234') {

        return res.status(401).json({
            mensaje: 'Usuario o contraseña incorrectos'
        });
    }

    
    const usuario = {
        username: username
    };

    
    const token = jwt.sign(usuario, SECRET_KEY, {
        expiresIn: '1h'
    });

    
    res.json({
        mensaje: 'Login correcto',
        token: token
    });
};


exports.perfil = (req, res) => {

    res.json({
        mensaje: 'Ruta protegida',
        usuario: req.usuario
    });
};