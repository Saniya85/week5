const express = require('express');
const router = express.Router();
const { addEmployee, getEmployees, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const { validateEmployee } = require('../middleware/validations/employeeValidation');

router.post('/add', validateEmployee, addEmployee);
router.get('/list', getEmployees);
router.put('/update/:id', updateEmployee);
router.delete('/delete/:id', deleteEmployee);

module.exports = router;



