const skillService = require('../services/skillServices');

// Create a new skill
const createSkill = async (req, res) => {
    try {
        const skill = await skillService.addSkill(req.body);
        res.status(201).json(skill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all skills
const getAllSkills = async (req, res) => {
    try {
        const skills = await skillService.getAllSkills();
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get skill by ID
const getSkillById = async (req, res) => {
    try {
        const skill = await skillService.getSkillById(req.params.id);
        if (!skill) return res.status(404).json({ message: 'Skill not found' });

        res.status(200).json(skill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update skill by ID
const updateSkill = async (req, res) => {
    try {
        const skill = await skillService.updateSkill(req.params.id, req.body);
        res.status(200).json(skill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete skill by ID
const deleteSkill = async (req, res) => {
    try {
        await skillService.deleteSkill(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkill,
    deleteSkill
};


