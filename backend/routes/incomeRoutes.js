import express from "express";
import { addIncome,getIncome,deleteIncome } from "../controllers/IncomeControllers.js";
import { protect } from "../middleware/authMiddleware.js";


const router=express.Router();

router.post("/", protect, addIncome);
router.get("/", protect, getIncome);
router.delete("/:id", protect, deleteIncome);

export default router;