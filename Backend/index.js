const express = require('express');
const cors = require('cors');
const app = express();
const port = '3000';

var login_routes = require('./routes/login.routes');
var mensajes_routes = require('./routes/mensajes.routes');
// var correos_routes = require('./routes/correo.routes');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(login_routes);
app.use(mensajes_routes);
// app.use(correos_routes);
app.use(express.static('src'));
app.listen(port, () => {
    console.log(`Server up Localhost ${port}`); 
})