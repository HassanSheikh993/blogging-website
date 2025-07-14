import { api } from "./baseUrl";

export const insertUser = async(userData)=>{
    const result = await api.post("/insert-user-data",userData);
    console.log(result.data);
    return result.data;
}