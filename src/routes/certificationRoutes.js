const express = require('express');
const router = express.Router();
const certificationController = require('../controllers/certificationController');

router.post('/add', certificationController.createCertification);
router.get('/', certificationController.getAllCertifications);
router.get('/:id', certificationController.getCertificationById);
router.delete('/delete/:id', certificationController.deleteCertification);
router.get('/employee/:employeeId', certificationController.getCertificationsByEmployee);
module.exports = router;



