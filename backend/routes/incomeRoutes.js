import express from "express";
import { addIncome,getIncome,deleteIncome } from "../controllers/IncomeControllers";

const router=express.Router();

router.post("/",addIncome);
router.get("/",getIncome);
router.delete("/",deleteIncome);

export default router;