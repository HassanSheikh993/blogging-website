import { blog } from "../model/blog.js";

export const trendingBlogs = async (req,res)=>{
    const result = await blog.find().sort({likes:-1}).limit(5);
    if(!result || result.length === 0){
    res.status(200).json({message:"No record to display"})
}else{
    res.status(200).send(result);
}
}