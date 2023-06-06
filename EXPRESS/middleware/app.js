import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = [
  { id: 1, username: "john", password: "password123" },
  { id: 2, username: "jane", password: "password456" },
];

const authenticateMiddleware = (req, res, next) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

app.post("/api/data", authenticateMiddleware, (req, res) => {
  const data = req.body;
  res.json({ message: "Data posted successfully" });
});

app.get("/test", (req, res) => {
  res.send("Middleware is working");
});

export default app;
