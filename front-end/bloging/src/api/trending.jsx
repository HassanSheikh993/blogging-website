import { api } from "./baseUrl";

export const trendingBlogs = async()=>{
    const result = await api.get("/trending-blog");
    return result.data;
}

// export const trendingBlogs = async () => {
//   try {
//     const result = await api.get("/trending-blog");
//     return Array.isArray(result.data) ? result.data : [];
//   } catch (err) {
//     console.error("Error fetching trending blogs:", err);
//     return [];
//   }
// };
