const Joi = require('joi');

const mentorshipSchema = Joi.object({
    mentor: Joi.string().required(),
    mentee: Joi.string().required(),
    startDate: Joi.date().default(Date.now),
});

const validateMentorship = (req, res, next) => {
    const { error } = mentorshipSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
};

module.exports = validateMentorship;
