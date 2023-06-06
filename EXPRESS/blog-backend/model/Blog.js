import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
export default mongoose.model("blog", blogSchema);
