const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company.controller');

router.get('/', companyController.getCompany);
router.post('/', companyController.createOrUpdateCompany);

module.exports = router;
