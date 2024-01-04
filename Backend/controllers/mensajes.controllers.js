
const { pool } = require("../pgConnection");
// verificarToken.js
const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
  // Obtener el token del encabezado de la solicitud
  const token = req.headers['authorization'];

  // Verificar si existe el token
  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    // Verificar y decodificar el token
    const decoded = jwt.verify(token, 'qqq');

    // Agregar la información decodificada del usuario al objeto request para su uso posterior
    req.usuario = decoded.usuario;
    
    // Continuar con la ejecución
    next();
  } catch (error) {
    return res.status(403).json({ mensaje: 'Token inválido' });
  }
}



async function getCorreosEnviados(req, res) {
    const token = req.headers.authorization; // Obtén el token del encabezado de la solicitud
    console.log("token tomado del metodo",token);
    if (!token) {
        return res.status(401).json({ error: 'No se proporcionó un token' });
    }
   
    try {
        // Verificar el token para obtener la información del usuario autenticado
        const usuarioAutenticado = jwt.verify(token, 'qqq');
        console.log("Usuario autenticado:", usuarioAutenticado);

        const  msj_emisor  = usuarioAutenticado.usr_correo;

        // Consulta para buscar los mensajes enviados por el usuario autenticado
        const query = 'SELECT msj_emisor, msj_receptor, msj_asunto, msj_mensaje, msj_fecha FROM mensaje WHERE msj_emisor=$1';
        const values = [msj_emisor];
        console.log(query, values);
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();

        if (result.rows.length > 0) {
            const mensajesEnviados = result.rows;
            res.status(200).json({ mensajesEnviados });
        } else {
            res.status(404).json({ error: 'No se encontraron mensajes enviados por este usuario' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error en el servidor', details: err.message });
    }
}
module.exports = { getCorreosEnviados, verificarToken };