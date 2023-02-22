const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');


class Server { 

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.usuariosPath = '/api/usuarios';

        this.authPath     = '/api/auth';

        // Conectar a BD
        this.connectDB();

        // Middlewares - Funcion que se ejecuta siempre que se levante el servidor
        this.middlewares();

        // Rutas de mi app
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {

        //CORS
        this.app.use(cors());

        // Parseo y lectura del Body
        this.app.use(express.json());

        // Servir directorio publico, use() es el middleware
        this.app.use(express.static('public')); //si encuentra el index.html ese será la home.
    }

    routes() {
        this.app.use(this.authPath, require('../routes/auth'));
        // Esta es la ruta que hay que llamar del endpoint /api/usuarios
        this.app.use(this.usuariosPath, require('../routes/users'));
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ', this.port);
        });
    }
}

module.exports = Server;