const express = require('express');
const router = express.Router();
const mentorshipController = require('../controllers/mentorshipController'); // Ensure this file exists

// Define mentorship-related routes
router.post('/', mentorshipController.createMentorship);  //  Ensure function exists
router.get('/', mentorshipController.getAllMentorships);
router.get('/:id', mentorshipController.getMentorshipById);
router.put('/:id', mentorshipController.updateMentorship);
router.delete('/:id', mentorshipController.deleteMentorship);

module.exports = router;


