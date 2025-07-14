import { api } from "./baseUrl";

export const fetchUserName = async()=>{

    const result = await api.get("/sending-userName",{
  withCredentials: true  });
  
    console.log("api: ", result.data,)
    return result.data;
}



