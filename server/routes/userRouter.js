import express from "express"
import userController from "../controllers/userController"
const router = express.Router()

//получаем инфо о пользователе, возращаем найденного или созданного пользователя
router.get('/user', userController.getOrCreateUser)


export default router