import { Router } from "express";
import productRouter from "./productRouter.js";
import userRouter from "./userRouter.js";
import basketRouter from "./basketRouter.js";
import designRouter from "./designRouter.js"

const router = new Router()


router.use('/', userRouter)
router.use('/', productRouter)
router.use('/', basketRouter)
router.use('/', designRouter)

export default router
