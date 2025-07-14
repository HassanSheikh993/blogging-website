import { useEffect, useState } from "react"
import { trendingBlogs } from "../../api/trending";
import "../../styles/trending.css"

export function TrendingBlogs(){
    const [blogs,setBlogs] = useState([]);

    const trendingBlogsList = async()=>{
        const result = await trendingBlogs();
        setBlogs(result);
    }

useEffect(()=>{
    trendingBlogsList()
},[])

return (
  <>
    <h1 className="trending_title">Trending Blogs</h1>

    {blogs && blogs.length > 0 ? (
      blogs.map((data, index) => (
        <div key={index} className="blog_card">
          <h4>{data.title}</h4>
          <h5>{data.author}</h5>
          <p>{data.content}</p>

          <i
            className="fa-solid fa-thumbs-up fa-lg"
            style={{ cursor: "pointer" }}
          ></i>

          <p className="total_likes">{data.likes}</p>
        </div>
      ))
    ) : (
      <p>No trending blogs available</p>
    )}
  </>
);

}