const mongoose= require('mongoose');

const employeeSchema =new mongoose.Schema({
    name: {
        type:String,
        required:true

    },
    email: {
        type:String,
        required:true,
        unique:true

    },
    message : {
        type:String,
        required:true


    }

}); 
const Schema=new mongoose.model("Schema",employeeSchema);

module.exports=Schema;