import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  token = token.replace("Bearer ", "");

  try {
    const { email, role_id } = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.email = email;
    req.role_id = role_id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
