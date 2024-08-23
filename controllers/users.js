import { getUsers, getUserByEmail, createUser } from "../models/users.js";

export const getAll = async (req, res) => {
  const users = await getUsers();
  res.json(users);
};

export const getOneByEmail = async (req, res) => {
  const user = await getUserByEmail({ email: req.params.email });

  res.json(user);
};

export const createOne = async (req, res) => {
  const { email, username, password } = req.body;
  const user = await createUser({ email, username, password });

  res.json(user);
};
