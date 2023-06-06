import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/index.js";

export const getAllUser = async (req, res) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
  }
  if (!users) {
    return res.status(404).json({ message: "No Users Found" });
  }
  return res.status(200).json({ users });
};
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!(name && email && password)) {
      return res.status(400).send({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "User Already Exists" });
    }

    const myEPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: myEPassword,
    });
    const token = jwt.sign(
      {
        user_id: user._id,
        email,
      },
      config.SECRET_KEY,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    user.password = undefined;
    return res.status(200).json({ user, message: "User Added Sucessfully" });
  } catch (error) {
    console.log(error);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).send({ message: "field is missing" });
    }
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          user_id: user._id,
          email,
        },
        config.SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      user.password = undefined;
      return res.status(200).json({ user, message: "Login Sucessfull" });
    }
    return res.send({ message: "email or password is incorrect" });
  } catch (error) {
    console.log(error);
  }
};
