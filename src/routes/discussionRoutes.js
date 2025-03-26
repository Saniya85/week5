const express = require('express');
const router = express.Router();
const discussionController = require('../controllers/discussionController'); 

// Define discussion-related routes
router.post('/', discussionController.createDiscussion);  
router.get('/', discussionController.getAllDiscussions); 
router.get('/:id', discussionController.getDiscussionById);
router.put('/:id', discussionController.updateDiscussion);
router.delete('/:id', discussionController.deleteDiscussion);

module.exports = router;


