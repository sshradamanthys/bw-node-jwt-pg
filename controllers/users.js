import "dotenv/config";
import { UserModel } from "../models/users.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const getAll = async (req, res) => {
  const users = await UserModel.getUsers();
  res.json({ users });
};

const getOneByEmail = async (req, res) => {
  const { email } = req.params;
  const user = await UserModel.getUserSafelyByEmail({ email });

  res.json(user);
};

const register = async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const user = await UserModel.getUserByEmail({ email });

  if (user) {
    return res.status(400).json({ message: "Email already in use" });
  }

  const salt = await bcryptjs.genSalt(10);

  const hashedPassword = await bcryptjs.hash(password, salt);

  const newUser = await UserModel.createUser({
    email,
    username,
    password: hashedPassword,
  });

  const token = jwt.sign(
    {
      email: newUser.email,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.status(201).json({ user: newUser, token });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const user = await UserModel.getUserByEmail({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      {
        email: user.email,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const UserController = {
  getAll,
  getOneByEmail,
  register,
  login,
};
