import { blog } from "../model/blog.js";

export const insertBlog = async (req, res) => {
    try {
        console.log(req.body)
        const { title,author, content } = req.body;
        

        if (!title || !content || !author) {
            return res.status(400).json({ message: "Title and content are required." });
        }

        const result = await blog.insertOne({
            author:author,
            title: title,
            content: content
        })
      return  res.status(201).send({ message: "Successfully Uploaded" })
    } catch (err) {
        console.log("ERROR WILE INSERTING BLOG: ", err);
        res.send({ message: "Blog not Uploaded" })
    }
}