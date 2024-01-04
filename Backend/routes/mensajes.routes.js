const {Router} = require('express');
const router = new Router();
//AGG AQUI POR CADA NUEVA RUTA ABAJO
var{getCorreosEnviados }= require('../controllers/mensajes.controllers');

//Rutas endpoint
//Si hago un select es get, insert es pos, update es push drop es del
router.get('/mensajesenviados', getCorreosEnviados);
// router.post('/correos', createcorreos);
// router.get('/correos/:id', getcorreosID);
// router.put('/correos/:id', UpdateCiudad);
// router.delete('/correos/:id', DeleteCiudad);

module.exports=router;