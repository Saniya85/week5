const Joi = require('joi');

// Schema for discussion validation
const discussionSchema = Joi.object({
    title: Joi.string().min(3).max(255).required(),
    content: Joi.string().min(10).required(),
    author: Joi.string().required(), // Assuming it's an ObjectId (MongoDB user reference)
    tags: Joi.array().items(Joi.string()).optional(),
    createdAt: Joi.date().default(Date.now)
});

// Middleware to validate request body
const validateDiscussion = (req, res, next) => {
    const { error } = discussionSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).json({ message: error.details.map(err => err.message) });
    }
    next();
};

module.exports = validateDiscussion;
