const Company = require('../models/company');
const cloudinary = require('../config/cloudinary');

// Obtener la empresa configurada
exports.getCompany = async (req, res) => {
  try {
    const company = await Company.findOne();
    if (!company) {
      return res.status(404).json({ message: 'No hay datos de empresa configurados aún.' });
    }
    res.json(company);
  } catch (err) {
    console.error('Error al obtener empresa:', err);
    res.status(500).json({ error: 'Error al obtener los datos de la empresa' });
  }
};

// Crear o actualizar empresa
exports.createOrUpdateCompany = async (req, res) => {
  try {
    const data = { ...req.body };

    // Si hay logo en base64, subirlo a Cloudinary
    if (data.logo && data.logo.startsWith('data:image')) {
      const uploadRes = await cloudinary.uploader.upload(data.logo, {
        folder: 'cotizaciones/empresa',
      });
      data.logo = uploadRes.secure_url; // Guardamos la URL segura
    }

    const [company] = await Company.upsert(data, { returning: true });
    res.json({ message: 'Empresa guardada correctamente', company });
  } catch (err) {
    console.error('Error al guardar empresa:', err);
    res.status(500).json({ error: 'Error al guardar los datos de la empresa' });
  }
};
