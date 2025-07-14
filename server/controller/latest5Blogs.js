import { blog } from "../model/blog.js";
import { client } from "../redis/client.js";

export const LatestBlogs = async(req,res)=>{
    const redisData = await client.get("latestBlogs");
    if(redisData){
        return res.status(200).json(JSON.parse(redisData));
    }
    const result = await blog.find().limit(5);
     if(!result || result.length === 0){
    return res.status(200).json({message:"No record to display"})
    }

    await client.set("latestBlogs",JSON.stringify(result),"EX",120);
    res.status(200).send(result);

}