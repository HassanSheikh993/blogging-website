import { api } from "./baseUrl";

export const latestBlogs = async()=>{
    const result = await api.get("/latest-blogs");
    return result.data;
}

// export const latestBlogs = async () => {
//   try {
//     const result = await api.get("/latest-blogs");
//     return Array.isArray(result.data) ? result.data : [];
//   } catch (err) {
//     console.error("Error fetching latest blogs:", err);
//     return [];
//   }
// };
