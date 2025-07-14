import { api } from "./baseUrl";

export const userVerify = async(userData)=>{
    
    const result = await api.post("/verify-user",userData,{
    withCredentials: true, 
  });
    console.log(result)
    return result.data;
}