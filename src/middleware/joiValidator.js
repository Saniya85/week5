// const Joi = require('joi');

// // Employee Validation
// const validateScheema = Joi.object({
//     name: Joi.string()
//         .min(3)
//         .max(50)
//         .regex(/^[a-zA-Z\s]+$/)
//         .message("Name should be between 3-50 characters and contain only letters")
//         .required(),

//     email: Joi.string()
//         .email()
//         .pattern(/^[a-zA-Z0-9.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
//         .message("Invalid email format. It must contain '@")
//         .required(),

//     skills: Joi.array()
//         .items(Joi.string())
//         .min(1)
//         .message("Skills should be an array with at least one skill")
//         .required(),

//     role: Joi.string()
//         .min(3)
//         .max(50)
//         .message("Role should be between 3-50 characters")
//         .required(),
// });
// const validateEmployee = (req, res, next) => {
//     const { error } = validateScheema.validate(req.body);

//     if (error) {
//         return res.status(400).json({ error: error.details.map(err => err.message) });
//     }

//     next();
// };

// // Project Validation
// const validateProject = (req, res, next) => {
//     const schema = Joi.object({
//         title: Joi.string().required(),
//         description: Joi.string().required(),
//         assignedEmployees: Joi.array().items(Joi.string()).required(),
//         techStack: Joi.array().items(Joi.string()).required(),
//     });

//     const { error } = schema.validate(req.body);
//     if (error) return res.status(400).json({ error: error.details[0].message });

//     next();
// };

// // Skill Validation
// const validateSkill = (req, res, next) => {
//     const schema = Joi.object({
//         skillName: Joi.string().required(),
//         category: Joi.string().required(),
//     });

//     const { error } = schema.validate(req.body);
//     if (error) return res.status(400).json({ error: error.details[0].message });

//     next();
// };

// // Certification Validation
// const validateCertification = (req, res, next) => {
//     const schema = Joi.object({
//         employeeId: Joi.string().required(),
//         certificateName: Joi.string().required(),
//         dateIssued: Joi.date().default(Date.now),
//     });

//     const { error } = schema.validate(req.body);
//     if (error) return res.status(400).json({ error: error.details[0].message });

//     next();
// };

// // Discussion Validation
// const validateDiscussion = (req, res, next) => {
//     const schema = Joi.object({
//         topic: Joi.string().required(),
//         createdBy: Joi.string().required(),
//         messages: Joi.array().items(
//             Joi.object({
//                 sender: Joi.string().required(),
//                 text: Joi.string().required(),
//                 timestamp: Joi.date().default(Date.now),
//             })
//         ),
//     });

//     const { error } = schema.validate(req.body);
//     if (error) return res.status(400).json({ error: error.details[0].message });

//     next();
// };

// // Mentorship Validation
// const validateMentorship = (req, res, next) => {
//     const schema = Joi.object({
//         mentor: Joi.string().required(),
//         mentee: Joi.string().required(),
//         startDate: Joi.date().default(Date.now),
//     });

//     const { error } = schema.validate(req.body);
//     if (error) return res.status(400).json({ error: error.details[0].message });

//     next();
// };

// //  Export all validation functions correctly
// module.exports = {
//     validateEmployee,
//     validateProject,
//     validateSkill,
//     validateCertification,
//     validateDiscussion,
//     validateMentorship
// };


