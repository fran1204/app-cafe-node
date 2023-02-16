
const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/users');

const router = Router();

//res.status(403).json(); Devuelve el status 403 Forbbiden No authenticate
router.get('/', usuariosGet); // va por URL

// Actualizar info
router.put('/:id', usuariosPut);

// Crear un registo.
router.post('/', usuariosPost);

// Eliminar un registo.
router.delete('/', usuariosDelete);



module.exports = router;



