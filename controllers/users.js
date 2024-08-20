import { getUsers, getUserByEmail } from "../models/users.js";

export const getAll = async (req, res) => {
  const users = await getUsers();
  res.json(users);
};

export const getOneByEmail = async (req, res) => {
  const user = await getUserByEmail({ email: req.params.email });

  res.json(user);
};
