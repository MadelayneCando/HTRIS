const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'correos',
    password: 'Mermelada04',
    port: 5432,
});

module.exports = { pool };