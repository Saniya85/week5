const projectService = require('../services/projectServices');

// Get all projects
const getProjects = async (req, res) => {
    try {
        const projects = await projectService.getAllProjects();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new project
const createProject = async (req, res) => {
    try {
        const project = await projectService.createProject(req.body);
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get project by ID
const getProject = async (req, res) => {
    try {
        const project = await projectService.getProjectById(req.params.id);
        if (!project) return res.status(404).json({ message: 'Project not found' });

        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update project by ID
const updateProject = async (req, res) => {
    try {
        const project = await projectService.updateProject(req.params.id, req.body);
        res.status(200).json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete project by ID
const deleteProject = async (req, res) => {
    try {
        await projectService.deleteProject(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProjects,
    createProject,
    getProject,
    updateProject,
    deleteProject
};




// const Project = require('../models/Project');

// const addProject = async (req, res) => {
//     try {
//         const newProject = new Project(req.body);
//         await newProject.save();
//         res.status(201).json({ message: 'Project added successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// const getProjects = async (req, res) => {
//     try {
//         const projects = await Project.find().populate('assignedEmployees');
//         res.status(200).json(projects);
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// module.exports = {addProject, getProjects };
