const express = require('express');
const router = express.Router();
const quotationController = require('../controllers/quotation.controller');

// Obtener todas las cotizaciones
router.get('/', quotationController.getAllQuotations);

// Obtener cotización por ID
router.get('/:id', quotationController.getQuotationById);

// Crear una nueva cotización
router.post('/', quotationController.createQuotation);

// Eliminar cotización
router.delete('/:id', quotationController.deleteQuotation);

module.exports = router;
