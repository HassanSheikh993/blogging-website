import { api } from "./baseUrl";

export const insertData = async(blogData)=>{
    const result = await api.post("/upload-blog",blogData,{
  withCredentials: true  });
  console.log(result.data)
    return result.data;
}