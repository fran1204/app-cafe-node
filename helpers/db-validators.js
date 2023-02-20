const Role = require('../models/role');
const Usuario = require('../models/usuario');


const esRoleValido = async(rol = '') => { 
    const existeRole = await Role.findOne({ rol });
    if (!existeRole) {
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }
}

const emailExiste = async (correo = '') => {
    // Verficar si el usuario existe
    const existeEmail = await Usuario.findOne({ correo: correo });
    if (existeEmail) {
        throw new Error(`El correo ${correo} ya está registrado en la BD`);
    }
}


const existeUsuarioPorId = async (id) => {
    // Verficar si el usuario existe
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id ${id} no existe`);
    }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}










