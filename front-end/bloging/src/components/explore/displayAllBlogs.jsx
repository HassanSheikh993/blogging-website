import { useEffect, useState } from "react"
import { displayAllBlogs } from "../../api/allBlogs";
import "../../styles/trending.css"

export function DisplayBlogs(){
    const [blogs,setBlogs] = useState([]);

    const trendingBlogsList = async()=>{
        const result = await displayAllBlogs();
        setBlogs(result);
    }

useEffect(()=>{
    trendingBlogsList()
},[])


  return (
  <>
    <h1 className="trending_title">Explore</h1>

    {blogs.length === 0 ? (
      <p>No blogs available</p>  // <-- Safe fallback message
    ) : (
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
    )}
  </>
);

}