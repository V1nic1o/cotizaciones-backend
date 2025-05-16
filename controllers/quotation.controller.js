const Quotation = require('../models/quotation');

// Obtener todas las cotizaciones
exports.getAllQuotations = async (req, res) => {
  try {
    const quotations = await Quotation.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.json(quotations);
  } catch (err) {
    console.error('Error al obtener cotizaciones:', err);
    res.status(500).json({ error: 'Error al obtener cotizaciones' });
  }
};

// Obtener una cotización por ID
exports.getQuotationById = async (req, res) => {
  try {
    const quotation = await Quotation.findByPk(req.params.id);
    if (!quotation) return res.status(404).json({ error: 'Cotización no encontrada' });
    res.json(quotation);
  } catch (err) {
    console.error('Error al obtener cotización:', err);
    res.status(500).json({ error: 'Error al obtener cotización' });
  }
};

// Crear nueva cotización
exports.createQuotation = async (req, res) => {
  try {
    const {
      quotationNumber,
      date,
      validUntil,
      clientName,
      clientPhone,
      clientEmail,
      items,
      notes,
      subtotal,
      iva,
      total,
      conditions,
    } = req.body;

    const newQuotation = await Quotation.create({
      quotationNumber,
      date,
      validUntil,
      clientName,
      clientPhone,
      clientEmail,
      items,
      notes,
      subtotal,
      iva,
      total,
      conditions,
    });

    res.status(201).json({ message: 'Cotización creada con éxito', quotation: newQuotation });
  } catch (err) {
    console.error('Error al crear cotización:', err);
    res.status(500).json({ error: 'Error al crear la cotización' });
  }
};

// Eliminar cotización
exports.deleteQuotation = async (req, res) => {
  try {
    const quotation = await Quotation.findByPk(req.params.id);
    if (!quotation) return res.status(404).json({ error: 'Cotización no encontrada' });

    await quotation.destroy();
    res.json({ message: 'Cotización eliminada correctamente' });
  } catch (err) {
    console.error('Error al eliminar cotización:', err);
    res.status(500).json({ error: 'Error al eliminar la cotización' });
  }
};
