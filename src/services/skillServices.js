const Skill = require('../models/Skill');

// Add a new skill
const addSkill = async (skillData) => {
    try {
        return await Skill.create(skillData);
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all skills
const getAllSkills = async () => {
    try {
        return await Skill.find();
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get skill by ID
const getSkillById = async (skillId) => {
    try {
        return await Skill.findById(skillId);
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update a skill by ID
const updateSkill = async (skillId, updateData) => {
    try {
        return await Skill.findByIdAndUpdate(skillId, updateData, { new: true, runValidators: true });
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete a skill by ID
const deleteSkill = async (skillId) => {
    try {
        return await Skill.findByIdAndDelete(skillId);
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    addSkill,
    getAllSkills,
    getSkillById,
    updateSkill,
    deleteSkill
};

