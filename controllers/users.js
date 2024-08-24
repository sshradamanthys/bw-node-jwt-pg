import "dotenv/config";
import { UserModel } from "../models/users.js";

export const getAll = async (req, res) => {
  const users = await UserModel.getUsers();
  res.json({ users });
};

export const getOneByEmail = async (req, res) => {
  const { email } = req.params;
  const user = await UserModel.getUserSafelyByEmail({ email });

  res.json(user);
};
