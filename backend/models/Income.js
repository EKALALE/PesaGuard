import mongoose from "mongoose";

const  IncomeSchema = new mongoose.Schema({
    title:{ type:String,required :true},
    amount:{ type:Number,required:true },
    source:{ type:string   },
    date:{ type:Date,default:Date.now   }
});

export default mongoose.model("Income",IncomeSchema);