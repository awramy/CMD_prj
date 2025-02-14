import { Router } from "express";
import productRouter from "./productRouter.js";
import userRouter from "./userRouter.js";
import basketRouter from "./basketRouter.js";

const router = new Router()


router.use('/', userRouter)
router.use('/', productRouter)
router.use('/', basketRouter)

export default router
