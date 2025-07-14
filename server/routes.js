import express from "express";
import { testing } from "./controller/testing.js";
import { displayAllBlogs } from "./controller/allBlogs.js";
import { insertBlog } from "./controller/insertBlog.js";
import { deleteBlog } from "./controller/deleteBlog.js";
import { trendingBlogs } from "./controller/trendingBlogs.js";
import { updateLikes } from "./controller/updateLike-blog.js";
import { LatestBlogs } from "./controller/latest5Blogs.js";

import { insertUserData } from "./controller/users/insertUser.js";
import {VerifyUser} from "./controller/users/verifyUser.js"

import { auth } from "./middleWares/authMiddleWare.js";
import { sendUserName } from "./controller/sendCookies/sendCookiesToFrontEnd.js";

const router = express.Router();

router.get("/test",testing);
router.get("/blogs",displayAllBlogs);
router.post("/upload-blog",auth,insertBlog);
router.post("/delete-blog/:id",auth,deleteBlog);
router.get("/trending-blog",trendingBlogs);
router.put("/updateLikes/:id",auth,updateLikes);
router.get("/latest-blogs",LatestBlogs);


router.post("/insert-user-data",insertUserData);
router.post("/verify-user",VerifyUser)

router.get("/sending-userName",sendUserName);

export {router}
