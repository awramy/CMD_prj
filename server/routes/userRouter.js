import express from "express"
import userController from "../controllers/userController.js"
import authMW from "../middlewares/AuthMW.js";
const router = express.Router()

//получаем инфо о пользователе, возвращаем найденного или созданного пользователя
router.get('/user', authMW, userController.getOrCreateUser)
router.post('/user/savePhoto', userController.savePhoto)
router.get('/check', userController.checkUser)


export default router