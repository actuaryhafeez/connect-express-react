import mongoose from "mongoose";

// Defining Schema
const studentSchema = new mongoose.Schema({
  name:{type:String, required:true, trim:true},
  email:{type:String, required:true, trim:true},
  password:{type:String, required:true, trim:true},

})

// Model 
const StudentModel = mongoose.model("student", studentSchema)

export default StudentModel