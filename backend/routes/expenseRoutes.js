import express from "express";
import { addExpense,getExpenses,deleteExpense } from "../controllers/ExpenseControllers";

const router =express.Router();

router.post("/",addExpense);
router.get("/",getExpenses);
router.delete("/",deleteExpense);

export default router;