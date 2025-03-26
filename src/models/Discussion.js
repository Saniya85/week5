const mongoose=require('mongoose');

const DiscussionSchema=new mongoose.Schema({
    topic:{type:String,required:true},
    createdBy:{type:mongoose.Schema.Types.ObjectId, ref:'Employee'},
    messages:[{sender:String,text:String, timestamp:Date}]

});

module.exports=mongoose.model('Discussion',DiscussionSchema);