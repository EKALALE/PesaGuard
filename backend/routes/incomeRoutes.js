import express from "express";
import { addIncome,getIncome,deleteIncome } from "../controllers/IncomeControllers.js";

const router=express.Router();

router.post("/",addIncome);
router.get("/",getIncome);
router.delete("/:id",deleteIncome);

export default router;