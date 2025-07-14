import { api } from "./baseUrl";

export const displayAllBlogs = async()=>{
    const result = await api.get("/blogs");
    console.log(result)
    return result.data;
}

// export const displayAllBlogs = async () => {
//   try {
//     const result = await api.get("/blogs");
//     return Array.isArray(result.data) ? result.data : [];
//   } catch (err) {
//     console.error("Error fetching all blogs:", err);
//     return [];
//   }
// };
