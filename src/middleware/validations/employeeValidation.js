const Joi = require('joi');

const employeeSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(50)
        .regex(/^[a-zA-Z\s]+$/)
        .message("Name should be between 3-50 characters and contain only letters")
        .required(),

    email: Joi.string()
        .email()
        .pattern(/^[a-zA-Z0-9.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        .message("Invalid email format. It must contain '@'")
        .required(),

    skills: Joi.array()
        .items(Joi.string())
        .min(1)
        .message("Skills should be an array with at least one skill")
        .required(),

    role: Joi.string()
        .min(3)
        .max(50)
        .message("Role should be between 3-50 characters")
        .required(),
});

const validateEmployee = (req, res, next) => {
    const { error } = employeeSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details.map(err => err.message) });
    next();
};

module.exports = { validateEmployee };

