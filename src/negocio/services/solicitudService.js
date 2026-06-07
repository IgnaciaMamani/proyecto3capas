const solicitudDAO = require('../../datos/dao/solicitudDAO');

exports.crear = async (data) => {
    const { nombre, correo, mensaje } = data;

    if (!nombre || !correo || !mensaje) {
        throw new Error('Todos los campos son obligatorios');
    }

    const solicitud = {
        nombre: nombre.trim(),
        correo: correo.toLowerCase(),
        mensaje: mensaje.trim()
    };

    return await solicitudDAO.insertar(solicitud);
};

exports.listar = async () => {
    return await solicitudDAO.listar();
};