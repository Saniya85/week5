const Discussion = require('../models/Discussion');

// Create a new discussion
const createDiscussion = async (discussionData) => {
    try {
        return await Discussion.create(discussionData);
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all discussions
const getAllDiscussions = async () => {
    try {
        return await Discussion.find().populate('author', 'name email'); // Assuming author is a reference to a User model
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get discussion by ID
const getDiscussionById = async (discussionId) => {
    try {
        return await Discussion.findById(discussionId).populate('author', 'name email');
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update a discussion
const updateDiscussion = async (discussionId, updateData) => {
    try {
        return await Discussion.findByIdAndUpdate(discussionId, updateData, { new: true, runValidators: true });
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete a discussion
const deleteDiscussion = async (discussionId) => {
    try {
        return await Discussion.findByIdAndDelete(discussionId);
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { 
    createDiscussion, 
    getAllDiscussions, 
    getDiscussionById, 
    updateDiscussion, 
    deleteDiscussion 
};
