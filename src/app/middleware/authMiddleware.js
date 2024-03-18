import ApiError from "../../shared/ApiError.js";
import config from "../../config/index.js";
import { jwtHelper } from "../../utils/jwtHelper.js";

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new ApiError(403, "Token is required!");
  }
  try {
    const decoded = await jwtHelper.verifyToken(token, config.jwt.secret);
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};

export default authMiddleware;
