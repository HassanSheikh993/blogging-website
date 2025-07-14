import { useEffect, useState } from "react"
import { insertData } from "../../api/insertBlogData"
import "../../styles/upload.css"
import { fetchUserName } from "../../api/fetchingUserName"

export function UploadBlog (){

      const [message, setMessage] = useState("");
    const [authorName,setAuthorName] = useState("");

    const [ blogData, setBlogData] = useState({
        title:"",
        author:"",
        content:""
    })

  

    const fetchAuthorName = async()=>{
        const authorName = await fetchUserName();
        setAuthorName(authorName.userName);
    }

    useEffect(()=>{
fetchAuthorName();
    },[])

    function handleOnChange(e){
         setBlogData({...blogData,[e.target.name]:e.target.value})
         console.log(blogData)
    }

    const handleOnSubmit = async (e)=>{
        e.preventDefault();
 const result = await insertData(blogData);
 setMessage(result.message);
    }

    return(
        <>
        <form action="" onSubmit={handleOnSubmit}>
            <label htmlFor="">Author</label>
            <input type="text" value={authorName} name="author" required onChange={handleOnChange} readonly />

            <label htmlFor="">Title</label>
            <input type="text" value={blogData.title} name="title" required onChange={handleOnChange} />

            <label htmlFor="">Content</label>

<textarea 
  value={blogData.content} 
  name="content" 
  required 
  onChange={handleOnChange}
  rows="8"
  cols={100}
/>

             <button type="submit">Upload</button>
        </form>
         {message && <p>{message}</p>}

        </>
    )
}