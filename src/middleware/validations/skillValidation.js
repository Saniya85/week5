const Joi = require('joi');

const skillSchema = Joi.object({
    skillName: Joi.string().required(),
    category: Joi.string().required(),
});

const validateSkill = (req, res, next) => {
    const { error } = skillSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
};

module.exports = validateSkill;
