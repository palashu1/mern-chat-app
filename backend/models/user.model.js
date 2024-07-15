import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
   fullName:{
    type:String,
    required:true,
   },
   username:{
    type:String,
    requered:true,
    unique:true,
   },
   password:{
    type:String,
    requered:true,
    minlength:6,
   },
   gender:{
    type:String,
    requered:true,
    enum:["male","female"],
   },
   profilePic:{
    type:String,
    default:"",
   },
   //createdAt,uodatedAt
},{timestamps:true});

const user=mongoose.model("User", userSchema);
export default user;