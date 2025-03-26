
const Joi = require('joi');

const validateCertification = (data) => {
    const schema = Joi.object({
        employeeId: Joi.string().required().messages({
            'any.required': 'Employee ID is required.',
            'string.empty': 'Employee ID cannot be empty.'
        }),
        certificateName: Joi.string().min(3).max(100).required().messages({
            'any.required': 'Certificate name is required.',
            'string.empty': 'Certificate name cannot be empty.',
            'string.min': 'Certificate name must be at least 3 characters.',
            'string.max': 'Certificate name cannot exceed 100 characters.'
        }),
        dateIssued: Joi.date().iso().required().messages({
            'any.required': 'Date issued is required.',
            'date.base': 'Date issued must be a valid date in YYYY-MM-DD format.'
        })
    });

    return schema.validate(data, { abortEarly: false });
};

module.exports = validateCertification;

