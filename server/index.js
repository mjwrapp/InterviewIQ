 import express from "express"
 import dotenv from "dotenv"
 import connectDb from "./config/connectDB.js"
 //information from the env file 
 dotenv.config()
 import cors from "cors"
 import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"

 const app = express()
 app.use(cors({
  origin:"http://localhost:5173",
  credentials: true
}))
 app.use(express.json())
app.use(cookieParser())


app.use("/api/auth",authRouter)
 app.use("/api/users", userRouter) 
 app.use("/api/interview",interviewRouter)

 app.get("/",(req,res)=>{
   return res.json({message:"Server Started"})
 });

 const PORT = process.env.PORT ||6000
 app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
  connectDb()
 });