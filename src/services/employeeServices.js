const Employee = require('../models/Employee');

const addEmployee = (employeeData) => {
    return Employee.findOne({ email: employeeData.email })
        .then(existingEmployee => {
            if (existingEmployee) {
                return { status: 400, error: "Employee with this email already exists" };
            }
            const newEmployee = new Employee(employeeData);
            return newEmployee.save().then(() => ({
                status: 201,
                message: "Employee added successfully!"
            }));
        })
        .catch(error => {
            console.error("Error adding employee:", error);
            return { status: 500, error: "Internal Server Error" };
        });
};

const getEmployees = (filter) => {
    return Employee.find(filter)
        .then(employees => ({ status: 200, data: employees }))
        .catch(error => {
            console.error("Error fetching employees:", error);
            return { status: 500, error: "Internal Server Error" };
        });
};

const updateEmployee = (id, updatedData) => {
    return Employee.findById(id)
        .then(oldEmployee => {
            if (!oldEmployee) {
                return { status: 404, error: "Employee not found" };
            }
            return Employee.findByIdAndUpdate(id, { $set: updatedData }, { new: true, runValidators: true })
                .then(updatedEmployee => ({
                    status: 200,
                    message: "Employee updated successfully",
                    oldData: oldEmployee,
                    newData: updatedEmployee
                }));
        })
        .catch(error => {
            console.error("Error updating employee:", error);
            return { status: 500, error: "Internal Server Error" };
        });
};

const deleteEmployee = (id) => {
    return Employee.findByIdAndDelete(id)
        .then(deletedEmployee => {
            if (!deletedEmployee) {
                return { status: 404, error: "Employee not found" };
            }
            return { status: 200, message: "Employee deleted successfully", deletedEmployee };
        })
        .catch(error => {
            console.error("Error deleting employee:", error);
            return { status: 500, error: "Internal Server Error" };
        });
};

module.exports = { addEmployee, getEmployees, updateEmployee, deleteEmployee };


// const Employee = require('../models/Employee');

// const addEmployee = async (employeeData) => {
//     const newEmployee = new Employee(employeeData);
//     return await newEmployee.save();
// };

// const getEmployees = async (filter) => {
//     return await Employee.find(filter);
// };

// const updateEmployee = async (id, updatedData) => {
//     return await Employee.findByIdAndUpdate(id, updatedData, { 
//         new: true, 
//         runValidators: true 
//     });
// };

// const deleteEmployee = async (id) => {
//     return await Employee.findByIdAndDelete(id);
// };

// module.exports = { addEmployee, getEmployees, updateEmployee, deleteEmployee }