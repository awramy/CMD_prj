import express from "express"
import userController from "../controllers/userController.js"
import authMW from "../middlewares/AuthMW.js";
const router = express.Router()

//получаем инфо о пользователе, возращаем найденного или созданного пользователя
router.get('/user', authMW, userController.getOrCreateUser)
router.get('/check', authMW, userController.checkUser)


export default router