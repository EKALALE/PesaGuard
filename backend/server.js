import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import nodemon from "nodemon";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Db/Mongoose connection
mongoose.connect(process.env.MONGO_URI)
        .then(()=>console.log("Mongodb connected successfully"))
        .catch(err => console.log(err));

//Routes
app.get("/",(req,res)=>{
    res.send("PesGuard backend Running");

});

//port
const PORT =process.env.PORT||5000;
//app listen

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));