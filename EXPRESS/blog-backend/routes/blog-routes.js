import express from "express";

import { getAllBlogs } from "../controller/blog-controller.js";
import { addBlog } from "../controller/blog-controller.js";
import { updateBlog } from "../controller/blog-controller.js";
import { getById } from "../controller/blog-controller.js";
import { deleteBlog } from "../controller/blog-controller.js";
const blogrouter = express.Router();

blogrouter.get("/", getAllBlogs);
blogrouter.post("/add", addBlog);
blogrouter.put("/update/:id", updateBlog);
blogrouter.get("/:id", getById);
blogrouter.delete("/delete/:id", deleteBlog);
export default blogrouter;
