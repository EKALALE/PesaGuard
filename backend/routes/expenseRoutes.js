import express from "express";
import { addExpense,getExpenses,deleteExpense } from "../controllers/ExpenseControllers.js";

const router =express.Router();

router.post("/",addExpense);
router.get("/",getExpenses);
router.delete("/:id", deleteExpense);


export default router;