import express from "express";
import { getAllUser } from "../controller/user-controller.js";
import { signup } from "../controller/user-controller.js";
import { login } from "../controller/user-controller.js";
const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", signup);
router.post("/login", login);
export default router;
