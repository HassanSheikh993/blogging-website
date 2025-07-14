import { blog } from "../model/blog.js";

export const updateLikes = async(req,res)=>{
    try{
        const blogID = req.params.id;
        console.log(blogID)
const blogExist = await blog.findOne({_id:blogID});
if(blogExist){
    const result = await blog.updateOne({_id:blogID},{$inc:{likes:1}})
    console.log(result);
    res.status(204).send({message:"Blog Updated"})
}
    }catch(err){
res.status(404).json({message:"Blog not Found"})
    }
}