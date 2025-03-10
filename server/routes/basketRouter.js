import express from "express";
import basketController from "../controllers/basketController.js";

const router = express.Router();

router.get('/basket', basketController.getAll)
router.get('/basket/check', basketController.checkBasketItem)
router.post('/basket', basketController.createOne)
router.delete('/basket', basketController.deleteAll)
router.delete('/basket/:id', basketController.deleteOne)
router.post('/сheckout', basketController.сheckoutBascet)

export default router