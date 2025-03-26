const mentorshipService = require('../services/mentorshipServices');

// Create a new mentorship session
const createMentorship = async (req, res) => {
    try {
        const mentorship = await mentorshipService.createMentorship(req.body);
        res.status(201).json(mentorship);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all mentorship sessions
const getAllMentorships = async (req, res) => {
    try {
        const mentorships = await mentorshipService.getAllMentorships();
        res.status(200).json(mentorships);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get mentorship session by ID
const getMentorshipById = async (req, res) => {
    try {
        const mentorship = await mentorshipService.getMentorshipById(req.params.id);
        if (!mentorship) {
            return res.status(404).json({ message: 'Mentorship not found' });
        }
        res.status(200).json(mentorship);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get mentorships by mentor ID
const getMentorshipsByMentor = async (req, res) => {
    try {
        const mentorships = await mentorshipService.getMentorshipsByMentor(req.params.mentorId);
        res.status(200).json(mentorships);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get mentorships by mentee ID
const getMentorshipsByMentee = async (req, res) => {
    try {
        const mentorships = await mentorshipService.getMentorshipsByMentee(req.params.menteeId);
        res.status(200).json(mentorships);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update mentorship session
const updateMentorship = async (req, res) => {
    try {
        const mentorship = await mentorshipService.updateMentorship(req.params.id, req.body);
        res.status(200).json(mentorship);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete mentorship session
const deleteMentorship = async (req, res) => {
    try {
        await mentorshipService.deleteMentorship(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
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



