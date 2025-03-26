const discussionService = require('../services/discussionServices'); 
const createDiscussion = async (req, res) => {
    try {
        const discussion = await discussionService.createDiscussion(req.body);
        res.status(201).json(discussion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllDiscussions = async (req, res) => {
    try {
        const discussions = await discussionService.getAllDiscussions();
        res.status(200).json(discussions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getDiscussionById = async (req, res) => {
    try {
        const discussion = await discussionService.getDiscussionById(req.params.id);
        if (!discussion) {
            return res.status(404).json({ message: 'Discussion not found' });
        }
        res.status(200).json(discussion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateDiscussion = async (req, res) => {
    try {
        const discussion = await discussionService.updateDiscussion(req.params.id, req.body);
        res.status(200).json(discussion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteDiscussion = async (req, res) => {
    try {
        const deletedDiscussion = await discussionService.deleteDiscussion(req.params.id);
        
        if (!deletedDiscussion) {
            return res.status(404).json({ message: 'Discussion not found' });
        }

        res.status(200).json({ message: 'Discussion deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { createDiscussion, getAllDiscussions, getDiscussionById, updateDiscussion, deleteDiscussion };
