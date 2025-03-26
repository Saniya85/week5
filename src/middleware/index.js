const { validateProject } = require('../middleware/validations/projectValidation');
const { validateEmployee } = require('../middleware/validations/employeeValidation');
const { validateSkill } = require('../middleware/validations/skillValidation');
const { validateCertification } = require('../middleware/validations/certificationValidation');
const { validateDiscussion } = require('../middleware/validations/discussionValidation');
const { validateMentorship } = require('../middleware/validations/mentorshipValidation');


module.exports = {
    validateEmployee,
    validateProject,
    validateSkill,
    validateCertification,
    validateDiscussion,
    validateMentorship
};
