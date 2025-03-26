const mongoose = require('mongoose');

const MentorshipSchema = new mongoose.Schema({
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    mentee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    startDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Mentorship', MentorshipSchema);
