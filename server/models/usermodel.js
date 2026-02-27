import mongoose from "mongoose";

//schema like defining what fields 
//we use time stamps to knpw time and date  
 const userSchema = new mongoose.Schema({
   name :{type:String,
    required:true
   },
   email:{
          type:String,
          unique:true,
          required:true
   },
   credits:{
        type:Number,
        default:100
   }

 },{timestamps:true})

 const User = mongoose.model("User",userSchema)

 export default User