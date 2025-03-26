const Certification = require("../models/Certification");

const addCertification = (data) => {
    const newCertification = new Certification(data);
    return newCertification
        .save()
        .then((certification) => ({ success: true, data: certification }))
        .catch((error) => ({ success: false, error: error.message }));
};

const getAllCertifications = () => {
    return Certification.find()
        .populate("employeeId", "name")
        .then((certifications) => ({ success: true, data: certifications }))
        .catch((error) => ({ success: false, error: error.message }));
};

const getCertificationById = (id) => {
    return Certification.findById(id)
        .populate("employeeId", "name")
        .then((certification) => {
            if (!certification) return { success: false, error: "Certification not found" };
            return { success: true, data: certification };
        })
        .catch((error) => ({ success: false, error: error.message }));
};

const getCertificationsByEmployee = (employeeId) => {
    return Certification.find({ employeeId })
        .then((certifications) => ({ success: true, data: certifications }))
        .catch((error) => ({ success: false, error: error.message }));
};

const deleteCertification = (id) => {
    return Certification.findByIdAndDelete(id)
        .then((deleted) => {
            if (!deleted) return { success: false, error: "Certification not found" };
            return { success: true, message: "Certification deleted successfully" };
        })
        .catch((error) => ({ success: false, error: error.message }));
};

module.exports = {
    addCertification,
    getAllCertifications,
    getCertificationById,
    getCertificationsByEmployee,
    deleteCertification,
};
// const Certification = require('../models/Certification');

// //  Add a new certification
// const addCertification = async (data) => {
//     try {
//         const newCertification = new Certification(data);
//         await newCertification.save();
//         return { success: true, data: newCertification };
//     } catch (error) {
//         return { success: false, error: error.message };
//     }
// };

// //  Get all certifications
// const getAllCertifications = async () => {
//     try {
//         const certifications = await Certification.find().populate('employeeId', 'name');
//         return { success: true, data: certifications };
//     } catch (error) {
//         return { success: false, error: error.message };
//     }
// };

// // Get a certification by ID
// const getCertificationById = async (id) => {
//     try {
//         const certification = await Certification.findById(id).populate('employeeId', 'name');
//         if (!certification) return { success: false, error: 'Certification not found' };
//         return { success: true, data: certification };
//     } catch (error) {
//         return { success: false, error: error.message };
//     }
// };

// const getCertificationsByEmployee = async (employeeId) => {
//     return await Certification.find({ employeeId });
// };

// // Delete a certification
// const deleteCertification = async (id) => {
//     try {
//         const deleted = await Certification.findByIdAndDelete(id);
//         if (!deleted) return { success: false, error: 'Certification not found' };
//         return { success: true, message: 'Certification deleted successfully' };
//     } catch (error) {
//         return { success: false, error: error.message };
//     }
// };

// module.exports = { addCertification, getAllCertifications, getCertificationById, deleteCertification ,getCertificationsByEmployee};


