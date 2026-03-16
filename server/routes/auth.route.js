import express from "express"
import { googleAuth, logOut } from "../controllers/auth.controller.js"
import { getCurrentUser } from "../controllers/user.controller.js"
import isAuth from "../middlewares/isAuth.js"

const authRouter = express.Router()

authRouter.post("/google", googleAuth)
authRouter.get("/logout", logOut)
authRouter.get("/currentuser", isAuth, getCurrentUser)

export default authRouter