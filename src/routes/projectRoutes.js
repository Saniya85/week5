const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const projectValidation = require('../middleware/validations/projectValidation');

router.post('/', projectValidation, projectController.createProject);
router.get('/:id', projectController.getProject);
router.get('/', projectController.getProjects);
router.put('/:id', projectValidation, projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;



