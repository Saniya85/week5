const Project = require('../models/Project');

// Get all projects
const getAllProjects = async () => {
    try {
        return await Project.find();
    } catch (error) {
        throw new Error(error.message);
    }
};

// Create a new project
const createProject = async (data) => {
    try {
        const newProject = new Project(data);
        await newProject.save();
        return newProject;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get project by ID
const getProjectById = async (id) => {
    try {
        return await Project.findById(id);
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update project by ID
const updateProject = async (id, data) => {
    try {
        return await Project.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete project by ID
const deleteProject = async (id) => {
    try {
        return await Project.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getAllProjects,
    createProject,
    getProjectById,
    updateProject,
    deleteProject
};



