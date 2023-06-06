import Blog from "../model/Blog.js";
export const getAllBlogs = async (req, res) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (error) {
    return console.log(error);
  }
  if (!blogs) {
    return res.status(404).json({ message: "No Blogs are Available" });
  }
  return res.status(200).json({ blogs });
};
export const addBlog = async (req, res) => {
  const { title, subTitle, content } = req.body;
  const blog = new Blog({
    title,
    subTitle,
    content,
  });
  try {
    await blog.save();
  } catch (error) {
    return console.log(error);
  }
  return res.status(200).json({ blog });
};
export const updateBlog = async (req, res) => {
  const { title, subTitle, content } = req.body;
  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      subTitle,
      content,
    });
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(500).json({
      sucess: false,
      message: "Unable to Update",
    });
  }
  return res.status(200).json({
    sucess: true,
    message: "Sucessfully Updated",
  });
};
export const getById = async (req, res) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!blog) {
    return res.status(400).json({
      sucess: false,
      message: "No Blog Found",
    });
  }
  return res.status(200).json({ blog, sucess: true, message: "BLOG Found" });
};
export const deleteBlog = async (req, res) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (!blog) {
    return res.status(500).json({
      sucess: false,
      message: "Unable to delete",
    });
  }
  return res.status(200).json({
    sucess: true,
    message: "Blog Sucessfully deleted",
  });
};
