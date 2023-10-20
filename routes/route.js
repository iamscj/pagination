import { getACDetails } from "../controller/component_controller.js";
import express from "express";

const router = express.Router();

router.get('/api/ac-data', getACDetails)

export default router;