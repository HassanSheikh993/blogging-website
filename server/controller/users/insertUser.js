import { user } from "../../model/user.js";

export const insertUserData = async(req,res)=>{
 try{
       const {name,email,password} = req.body;
    const userExist = await user.findOne({email:email});
    if(userExist){
        res.status(409).json({message:"User With This Email Already Exists"});
    }else{
        const result = await user.insertOne({
            name:name,
            email:email,
            password:password
        })
        console.log(result);
        res.status(201).json({message:"Account Created Login To Continue"})
    }
 }catch(err){
    res.status(500).send("Something went wrong on the server");
 }

}