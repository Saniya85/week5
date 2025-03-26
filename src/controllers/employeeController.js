const employeeService = require("../services/employeeServices");

const addEmployee = (req, res) => {
    employeeService.addEmployee(req.body)
        .then(result => res.status(result.status).json(result))
        .catch(() => res.status(500).json({ error: "Internal Server Error" }));
};

const getEmployees = (req, res) => {
    let filter = {};

    if (req.query.name) {
        filter.name = { $regex: req.query.name, $options: 'i' };
    }

    if (req.query.skills) {
        filter.skills = { $in: req.query.skills.split(',') };
    }

    if (req.query.startsWith) {
        filter.name = { $regex: `^${req.query.startsWith}`, $options: "i" };
    }

    if (req.query.endsWith) {
        filter.name = { $regex: `${req.query.endsWith}$`, $options: "i" };
    }

    employeeService.getEmployees(filter)
        .then(result => res.status(result.status).json(result))
        .catch(() => res.status(500).json({ error: "Internal Server Error" }));
};

const updateEmployee = (req, res) => {
    const { id } = req.params;

    employeeService.updateEmployee(id, req.body)
        .then(result => res.status(result.status).json(result))
        .catch(() => res.status(500).json({ error: "Internal Server Error" }));
};

const deleteEmployee = (req, res) => {
    const { id } = req.params;

    employeeService.deleteEmployee(id)
        .then(result => res.status(result.status).json(result))
        .catch(() => res.status(500).json({ error: "Internal Server Error" }));
};

module.exports = { addEmployee, getEmployees, updateEmployee, deleteEmployee };
// const Employee = require('../models/Employee');
// const mongoose = require("mongoose");

// const addEmployee = async (req, res) => {
//     try {
//         const { name, skills, role, email } = req.body;

//         const existingEmployee = await Employee.findOne({ email });

//         if (existingEmployee) {
//             return res.status(400).json({ error: "Employee with this email already exists" });
//         }

//         const newEmployee = new Employee({ name, skills, role, email });

//         await newEmployee.save();
//         res.status(201).json({ message: "Employee added successfully!" });
//     } catch (error) {
//         console.error("Error adding employee:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// const getEmployees = async (req, res) => {
//     try {
//         let filter = {};

//         if (req.query.name) {
//             filter.name = { $regex: req.query.name, $options: 'i' };
//         }

//         if (req.query.skills) {
//             filter.skills = { $in: req.query.skills.split(',') };
//         }

//         if (req.query.startsWith) {
//             filter.name = { $regex: `^${req.query.startsWith}`, $options: "i" };
//         }

//         if (req.query.endsWith) {
//             filter.name = { $regex: `${req.query.endsWith}$`, $options: "i" };
//         }

//         console.log("Fetching Employees with filter:", filter);
//         const employees = await Employee.find(filter);

//         res.status(200).json(employees);
//     } catch (error) {
//         console.error("Error fetching employees:", error);
//         res.status(500).json({ message: 'Server error', error: error.message });
//     }
// };

// const updateEmployee = async (req, res) => {
//     try {
//         const { id } = req.params;

//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             return res.status(400).json({ error: "Invalid Employee ID" });
//         }

//         const { name, skills, role, email } = req.body;

//         const oldEmployee = await Employee.findById(id);
//         if (!oldEmployee) {
//             return res.status(404).json({ error: "Employee not found" });
//         }

//         const updatedEmployee = await Employee.findByIdAndUpdate(
//             id,
//             { $set: { name, skills, role, email } },
//             { new: true, runValidators: true }
//         );

//         res.status(200).json({
//             message: "Employee updated successfully",
//             oldData: oldEmployee,
//             newData: updatedEmployee
//         });

//     } catch (error) {
//         console.error("Error updating employee:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// const deleteEmployee = async (req, res) => {
//     try {
//         const { id } = req.params;

//         const deletedEmployee = await Employee.findByIdAndDelete(id);

//         if (!deletedEmployee) {
//             return res.status(404).json({ message: "Employee not found" });
//         }

//         res.status(200).json({ message: "Employee deleted successfully", deletedEmployee });
//     } catch (error) {
//         console.error("Error deleting employee:", error);
//         res.status(500).json({ message: 'Server error', error: error.message });
//     }
// };

// module.exports = { addEmployee, getEmployees, updateEmployee, deleteEmployee };





