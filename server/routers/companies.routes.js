const express = require('express');
const router = express.Router();
const companiesController=require('../controllers/companies.controller');

router.get('/',companiesController.getCompanies);
router.post('/', companiesController.createCompany);
router.get('/:id',companiesController.getCompany);
router.put('/:id',companiesController.editCompany);
router.delete('/:id',companiesController.deleteCompany);

module.exports = router;