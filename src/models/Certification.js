const mongoose=require('mongoose');

const CertificationSchema=new mongoose.Schema({
    employeeId:{type:mongoose.Schema.Types.ObjectId, ref:'Employee'},
    certificateName:{type:String,required:true},
    dateIssued:{type:Date,required:true},
});

module.exports=mongoose.model('Certification',CertificationSchema);


