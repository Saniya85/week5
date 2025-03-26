
const Joi = require('joi');
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true ,index:true},//indexing on name
    email: { type: String, required: true, unique: true },
    skills: {type:[String], required: true},
    role: { type: String, required: true ,index:true}, //indexing on role
},{timestamps:true});



EmployeeSchema.index({name:1,role:1});
EmployeeSchema.index({ skills: "text" });
EmployeeSchema.index({email:"hashed"})


module.exports = mongoose.model('Employee', EmployeeSchema);

