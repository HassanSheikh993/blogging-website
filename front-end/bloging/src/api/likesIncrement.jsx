import { api } from "./baseUrl";

export const likesIncrement = async (blogID)=>{
const result = await api.put(`/updateLikes/${blogID}`);
console.log(result.data);
}