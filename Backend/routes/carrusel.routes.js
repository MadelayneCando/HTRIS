//Constantes de router
const { Router } = require('express');
const router = new Router();

//Importacion de metodos de los controladores
var { loginUser } = require('../controllers/login.controllers');

//POST
router.post('/carrusel', loginUser);

//Exportación de modulo
module.exports = router;
