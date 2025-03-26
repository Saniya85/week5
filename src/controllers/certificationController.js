const certificationService = require("../services/certificationServices");
const validateCertification = require("../middleware/validations/certificationValidation");

const createCertification = (req, res) => {
    const { error } = validateCertification(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    certificationService
        .addCertification(req.body)
        .then((result) => {
            if (!result.success) return res.status(500).json({ error: result.error });
            res.status(201).json({ message: "Certification added successfully", certification: result.data });
        })
        .catch(() => res.status(500).json({ error: "Internal Server Error" }));
};

const getAllCertifications = (req, res) => {
    certificationService
        .getAllCertifications()
        .then((result) => {
            if (!result.success) return res.status(500).json({ error: result.error });
            res.json(result.data);
        })
        .catch(() => res.status(500).json({ error: "Internal Server Error" }));
};

const getCertificationById = (req, res) => {
    certificationService
        .getCertificationById(req.params.id)
        .then((result) => {
            if (!result.success) return res.status(404).json({ error: result.error });
            res.json(result.data);
        })
        .catch(() => res.status(500).json({ error: "Internal Server Error" }));
};

const getCertificationsByEmployee = (req, res) => {
    certificationService
        .getCertificationsByEmployee(req.params.employeeId)
        .then((result) => {
            if (!result.success) return res.status(404).json({ error: result.error });
            res.json(result.data);
        })
        .catch(() => res.status(500).json({ error: "Internal Server Error" }));
};

const deleteCertification = (req, res) => {
    certificationService
        .deleteCertification(req.params.id)
        .then((result) => {
            if (!result.success) return res.status(404).json({ error: result.error });
            res.json({ message: result.message });
        })
        .catch(() => res.status(500).json({ error: "Internal Server Error" }));
};

module.exports = {
    createCertification,
    getAllCertifications,
    getCertificationById,
    getCertificationsByEmployee,
    deleteCertification,
};
// const certificationService = require('../services/certificationServices');
// const validateCertification = require('../middleware/validations/certificationValidation');

// //  Create Certification
// const createCertification = async (req, res) => {
//     const { error } = validateCertification(req.body);
//     if (error) return res.status(400).json({ error: error.details[0].message });

//     const result = await certificationService.addCertification(req.body);
//     if (!result.success) return res.status(500).json({ error: result.error });

//     res.status(201).json({ message: "Certification added successfully", certification: result.data });
// };

// //  Get All Certifications
// const getAllCertifications = async (req, res) => {
//     const result = await certificationService.getAllCertifications();
//     if (!result.success) return res.status(500).json({ error: result.error });

//     res.json(result.data);
// };

// // Get Certification by ID
// const getCertificationById = async (req, res) => {
//     const result = await certificationService.getCertificationById(req.params.id);
//     if (!result.success) return res.status(404).json({ error: result.error });

//     res.json(result.data);
// };
// const getCertificationsByEmployee = async (req, res) => {
//     try {
//         const certifications = await certificationService.getCertificationsByEmployee(req.params.employeeId);
//         res.status(200).json(certifications);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Delete Certification
// const deleteCertification = async (req, res) => {
//     const result = await certificationService.deleteCertification(req.params.id);
//     if (!result.success) return res.status(404).json({ error: result.error });

//     res.json({ message: result.message });
// };

// module.exports = { createCertification, getAllCertifications, getCertificationById, deleteCertification,getCertificationsByEmployee  };







