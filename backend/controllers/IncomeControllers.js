import Income from "../models/Income.js";

//adding income
export const addIncome = async(req,res)=>
{
    try{
        const income =new Income(req.body);
        await income.save();
        res.status(201).json(income);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
};

//get all income
export const getIncome =async(req,res)=>{
    try{
        const income =await Income.find().sort({date: -1});
        res.json(income);
    }catch(err){
       res.status(500).json({error:error.mesage});
    }
};
//delete income
export const deleteIncome = async(req,res)=>{
    try{
        await Income.findByIdAndDelete(req.params.id);
        res.json({message:"income deleted"});
    }catch(err){
        res.status(500).json({error:error.message});
    }
};
