import db from "../../../knex/db.config.js";
import ApiError from "../../../shared/ApiError.js";
import {hashPasswordHelper} from "../../../utils/hashHelper.js";

const userSignUp = async (data) => {
    console.log(data);
  const isExist = await db("users").where("email", data.email).first();
  if (isExist) {
    throw new ApiError(400, "User already exist with this email!");
  }
  // Hashing password
  data.password = await hashPasswordHelper.hashPassword(data.password);
  const user = await db("users").insert(data)
  return user;
}

export const UserService = {
    userSignUp
};