const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    assignedEmployees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
    techStack: [{ type: String }]
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;


