import { user } from "../../model/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();
export const VerifyUser = async (req,res)=>{
    const {email,password} = req.body;
    try{
const userExist = await user.findOne({email:email});
console.log(userExist)
if(!userExist){
   return res.status(404).json({message:"User does not exists"})
}
if(userExist.password !== password){
   return res.status(401).json({message:"Incorrect Password"})
}else{
    const secretKey = process.env.JWT_SECRET;
    const userJwt = {
        userEmail:email
    }

    const token = jwt.sign(userJwt,secretKey);
      res.cookie("token", token, {
      httpOnly: true,
      secure: false, // ✅ set to true in production with HTTPS
      sameSite: "Lax",
    //   maxAge: 24 * 60 * 60 * 1000
    });
   return res.status(200).json({message:"User Verified"});
}

    }catch(err){
       return res.status(500).json({message:"Some thing went wrong"})
    }
}