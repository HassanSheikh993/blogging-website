import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  author: {type:String, required: true},
  title:   { type: String, required: true },
  content: { type: String, required: true },
  likes:   { type: Number, default: 0 },
//   author:  { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });


export const blog = new mongoose.model("blogs",blogSchema);