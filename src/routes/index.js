const express = require('express');
const router = express.Router();

const employeeRoutes = require('./employeeRoutes');
const projectRoutes = require('./projectRoutes');
const skillRoutes = require('./skillRoutes');
const certificationRoutes = require('./certificationRoutes');
const discussionRoutes = require('./discussionRoutes');
const mentorshipRoutes = require('./mentorshipRoutes');

router.use('/employees', employeeRoutes);
router.use('/projects', projectRoutes);
router.use('/skills', skillRoutes);
router.use('/certifications', certificationRoutes);
router.use('/discussions', discussionRoutes);
router.use('/mentorships', mentorshipRoutes);

module.exports = router;

