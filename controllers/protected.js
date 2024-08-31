import "dotenv/config";
import { UserModel } from "../models/users.js";

const profile = async (req, res) => {
  try {
    const { email } = req;

    const user = await UserModel.getUserSafelyByEmail({ email });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    res.json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const ProtectedController = {
  profile,
};
