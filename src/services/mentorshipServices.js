const Mentorship = require('../models/Mentorship');

// Create a new mentorship session
const createMentorship = async (mentorshipData) => {
    try {
        return await Mentorship.create(mentorshipData);
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all mentorship sessions
const getAllMentorships = async () => {
    try {
        return await Mentorship.find().populate('mentor').populate('mentee');
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get mentorship session by ID
const getMentorshipById = async (mentorshipId) => {
    try {
        return await Mentorship.findById(mentorshipId).populate('mentor').populate('mentee');
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get mentorships by mentor ID
const getMentorshipsByMentor = async (mentorId) => {
    try {
        return await Mentorship.find({ mentor: mentorId }).populate('mentee');
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get mentorships by mentee ID
const getMentorshipsByMentee = async (menteeId) => {
    try {
        return await Mentorship.find({ mentee: menteeId }).populate('mentor');
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update a mentorship session
const updateMentorship = async (mentorshipId, updateData) => {
    try {
        return await Mentorship.findByIdAndUpdate(mentorshipId, updateData, { new: true, runValidators: true });
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete a mentorship session
const deleteMentorship = async (mentorshipId) => {
    try {
        return await Mentorship.findByIdAndDelete(mentorshipId);
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { 
    createMentorship, 
    getAllMentorships, 
    getMentorshipById, 
    getMentorshipsByMentor, 
    getMentorshipsByMentee, 
    updateMentorship, 
    deleteMentorship 
};

