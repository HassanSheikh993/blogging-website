import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { user } from "../../model/user.js";

dotenv.config();

export const sendUserName = async(req,res)=>{
    console.log("start")
    const token = req.cookies.token;
    console.log(token)
    if(!token){
        return res.json({message:"NO token" })
    }

   const secretKey = process.env.JWT_SECRET;

    console.log("SERCRET KEY: ",secretKey)

    const decoded = jwt.verify(token,secretKey);
    console.log("decoded: ",decoded)

    const userData = await user.findOne({email:decoded.userEmail});
    console.log(userData.name);
    res.json({userName:userData.name});

    //sending name to front end
    // check email from cookies that it exist in data base
    // then userData have whole record of that user
    // now send name to front end
}