const mongoose=require('mongoose');

const SkillSchema=new mongoose.Schema({
    skillName:{type:String,required:true},
    category:{type:String,required:true},//example 'frontend','backend','database'
});

module.exports=mongoose.model('Skill', SkillSchema);
