import "../../styles/home.css"
import { latestBlogs } from "../../api/latestBlogs"
import { likesIncrement } from "../../api/likesIncrement";

import { useEffect, useState } from "react"
export function LatestBlogs(){
    const [blogs,setBlogs] = useState([]);


   const loadBlogs = async()=>{
    const result = await latestBlogs();
    setBlogs(result);
   }


    useEffect(()=>{
 loadBlogs();
    },[])



    // ----- likes count

const handleLikesCount = async (id) => {
  await likesIncrement(id); // send to backend

  // update likes in frontend
  const updatedBlogs = blogs.map((blog) => {
    if (blog._id === id) {
      blog.likes += 1; // increase like count
    }
    return blog;
  });

  setBlogs(updatedBlogs); // update state
};



    return (
  <>
    <div className="home_latest_blog">
      <h3>Latest Blogs</h3>
      <div className="home_blog_details">
        {blogs.length === 0 ? (
          <p>No blogs available</p> // <-- safe message when data is empty
        ) : (
          blogs.map((data, index) => (
            <div key={index} className="blog_card">
              <h4>{data.title}</h4>
              <h5>{data.author}</h5>
              <p>{data.content}</p>

              <i
                className="fa-solid fa-thumbs-up fa-lg"
                onClick={() => handleLikesCount(data._id)}
                style={{ cursor: "pointer" }}
              ></i>

              <p className="total_likes">{data.likes}</p>
            </div>
          ))
        )}
      </div>
    </div>
  </>
);

}