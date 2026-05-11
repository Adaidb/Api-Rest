module.exports = (req, res) => {

    try {

        const id = req.params.id;



       
        if (isNaN(id)) {
            return res.status(400).json({
                error: 'El ID debe ser numerico'
            });
        }

       
        res.status(200).json({
            message: 'Peticion correcta',
            id: id
        });

    } catch (error) {

        res.status(500).json({
            error: 'Error interno del servidor'
        });

    }

};
