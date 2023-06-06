import express from "express";
const app = express();
app.use(express.json());

app.get("/post", (req, res) => {
  const posts = generatePosts(20);
  res.json(posts);
});

function generatePosts(numPosts) {
  const posts = [];
  for (let i = 1; i <= numPosts; i++) {
    posts.push({
      id: i,
      title: `Post ${i}`,
      content: `This is the content of post ${i}`,
    });
  }
  return posts;
}
export default app;
