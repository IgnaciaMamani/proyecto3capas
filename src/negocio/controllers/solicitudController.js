const solicitudService = require('../services/solicitudService');

exports.crearSolicitud = async (req, res) => {
    try {
        const resultado = await solicitudService.crear(req.body);
        res.json({ ok: true, data: resultado });
    } catch (error) {
        res.status(400).json({ ok: false, error: error.message });
    }
};

exports.listarSolicitudes = async (req, res) => {
    const data = await solicitudService.listar();
    res.json(data);
};