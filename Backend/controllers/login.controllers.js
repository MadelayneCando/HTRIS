const { pool } = require("../pgConnection");
const jwt = require('jsonwebtoken');

async function loginUser(req, res) {
    const { usr_correo, usr_pwd } = req.body;
    // Consulta para buscar el usuario por correo electrónico
    const query = 'SELECT * FROM usuario WHERE usr_correo = $1';
    const values = [usr_correo];
    console.log(query, values); 
    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();
        if (result.rows.length === 1) {
            const user = result.rows[0];
            // Verificar si la contraseña es correcta
            if (usr_pwd === user.usr_pwd) {
                const token = jwt.sign(
                    {usr_correo: user.usr_correo },
                    'qqq',
                    { expiresIn: "1h" });
                res.status(200).json({ message: 'Inicio de sesión exitoso', token });
                console.log("Login desde backend", token);

            } 
            else {
                // Si la contraseña no coincide, enviar un mensaje de error
                res.status(401).json({ error: 'Credenciales inválidas' });
            }
        } else {
            // Si no se encuentra el usuario, enviar un mensaje de error
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (err) {
        // Si hay un error en el servidor, devolver un mensaje de error
        res.status(500).json({ error: 'Error en el servidor' });
    }
}

module.exports = { loginUser };
