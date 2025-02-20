import express from "express";
import designController from "../controllers/designController.js";

const router = express.Router();


router.get('/products',  designController.getDesign)
router.post('/products', designController.createDesign)


export default router