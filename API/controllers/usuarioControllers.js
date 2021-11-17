

//Crear un nuevo usuario

const usuario = require('../models/usuario');

exports.nuevoUsuario = async (req,res,next) => {

    const Usuario = new usuario(req.body);
    try {
        await Usuario.save();
        res.json({mensaje : 'Se agrego correctamente el usuario'});

    } catch (error) {
        console.log(error);
        next(); //se va a la siguiente funcion
    }
}

    //OBTIENE TODOS LOS USUARIOS

    exports.obtenerUsuario = async (req,res,next) => {

        try {
            const usuarioget = await usuario.find({});
            res.json(usuarioget);
    
        } catch (error) {
            console.log(error);
            next(); //se va a la siguiente funcion
        }

    }

//OBTIENE USUARIO POR ID

     

    

    
