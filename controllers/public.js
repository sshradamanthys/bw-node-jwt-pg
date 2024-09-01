import "dotenv/config";

import path from "path";

const __dirname = import.meta.dirname;
const viewsPath = path.join(__dirname, "../views");

const loginView = async (req, res) => {
  await res.sendFile(viewsPath + "/login.html");
};

const registerView = async (req, res) => {
  await res.sendFile(viewsPath + "/register.html");
};

const profileView = async (req, res) => {
  res.sendFile(viewsPath + "/profile.html");
};

const testingView = async (req, res) => {
  res.sendFile(viewsPath + "/testing.html");
};

export const PublicController = {
  loginView,
  registerView,
  profileView,
  testingView,
};
