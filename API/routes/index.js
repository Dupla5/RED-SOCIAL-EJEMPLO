const express = require('express');
const router = express.Router();
const usuarioControllers = require('../controllers/usuarioControllers');

module.exports = function(){

//AGREGA USUARIOS CON POST

router.post('/usuario',usuarioControllers.nuevoUsuario)

//OBTIENE REGISTROS DE USUARIOS EN LA DB

router.get('/usuario',usuarioControllers.obtenerUsuario)

    return router;
}