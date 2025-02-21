import express from "express";
import designController from "../controllers/designController.js";

const router = express.Router();


router.get('/design',  designController.getDesign)
router.post('/design', designController.createDesign)

router.post('/like', designController.like)
router.post('/dislike', designController.dislike)


export default router