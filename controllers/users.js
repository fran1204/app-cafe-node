const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {
    //const query = req.query;
    // const {q, nombre = "no name", edad} = req.query; Si no  manda nombre en la url
    const {q, nombre, edad} = req.query;
    
    res.json({
        msg: "get API - controlador",
        q,
        nombre,
        edad
    });
}

const usuariosPost = (req, res = response) => {

    //JSON mandado por el Postman
    /*{
        "nombre": "Fran Rodriguez",
        "edad": 34,
        "id": 1234,
        "apellidos": "temita"
    }*/

    const { nombre, edad } = req.body; // Destructuro el JSON de Postman y solo recojo estas dos propiedades

    res.json({
        msg: "post API - controlador",
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: "put API - controlador",
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "delete API - controlador"
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}





