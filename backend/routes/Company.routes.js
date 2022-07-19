const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/Company.controller');

router.get('/operation', CompanyController.apiGetOperations);
router.get('/tables', CompanyController.apiGetTables);
router.post('/create', CompanyController.apiCreateCompany);
router.post('/inserttable', CompanyController.apiInsertTable);
router.post('/reservation', CompanyController.apiCreateReservation);

module.exports = router;