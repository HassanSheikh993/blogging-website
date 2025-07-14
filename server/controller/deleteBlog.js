import { blog } from "../model/blog.js";

export const deleteBlog = async (req,res)=>{
try{
    const blogID = req.params.id;
console.log(blogID)
const blogExist = await blog.findOne({_id:blogID});
if(blogExist){
    const result = await blog.deleteOne({_id:blogID});
    res.status(204).json({message:"Blog Deleted"});
}

}catch(err){
    res.status(404).json({message:"Blog not Found"})
}
}