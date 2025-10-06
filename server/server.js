import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose"
import cors from "cors";
import { router } from "./routes.js";
import cookieParser from "cookie-parser";
const app = express();


dotenv.config();
const PORT = process.env.PORT;
const url = process.env.MONGO_URI || "mongodb://localhost:27017/blogApp";


app.use(cors({
  origin: "http://frontend:80",  // your React app URL
  credentials: true                 // ✅ allow cookies to be sent
}));

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));


mongoose.connect(url).then(()=>{
    console.log("Connected with DB ")
}).catch((err)=>{
    console.log("Error while connecting with DB")
})

app.use("/api",router)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



