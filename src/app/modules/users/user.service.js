import config from "../../../config/index.js";
import db from "../../../knex/db.config.js";
import ApiError from "../../../shared/ApiError.js";
import {hashPasswordHelper} from "../../../utils/hashHelper.js";
import { jwtHelper } from "../../../utils/jwtHelper.js";

// Get all users
const getAllUsers = async () => {
  const users = await db("users").select("id", "name", "email");
  if (!users) {
    throw new ApiError(404, "Users not found!");
  }
  return users;
}

// get user by id
const getUserById = async (id) => {
  const user = await db("users")
    .where("id", id)
    .first()
    .select("id", "name", "email");
  if (!user) {
    throw new ApiError(404, "User not found!");
  }
  return user;
}

// create user
const userSignUp = async (data) => {
  const isExist = await db("users").where("email", data.email).first()
  if (isExist) {
    throw new ApiError(400, "User already exist with this email!");
  }
  // Hashing password
  data.password = await hashPasswordHelper.hashPassword(data.password);
  const user = await db("users").insert(data).returning("*");
  return user;
}

// user login
const userSignIn = async (data) => {
  const user = await db("users").where("email", data.email).first();
  if (!user) {
    throw new ApiError(400, "User not found with this email!");
  }
  const isMatch = await hashPasswordHelper.comparePassword(data.password, user.password);
  if (!isMatch) {
    throw new ApiError(400, "Password not match!");
  }

  const accessToken = await jwtHelper.createToken(
    {
      userId: user.id,
    },
    config.jwt.secret,
    config.jwt.expires_in
  );

  return {
    token: accessToken,
  };
}

// update user by id
const updateUserById = async (id, data) => {
  const user = await db("users").where("id", id).first();
  if (!user) {
    throw new ApiError(404, "User not found!");
  }
  const updatedUser = await db("users")
    .where("id", id)
    .update(data)
    .select("id", "name", "email")
    .returning("*")
  return updatedUser;
}

// delete user by id
const deleteUserById = async (id) => {
  const user = await db("users").where("id", id).first();
  if (!user) {
    throw new ApiError(404, "User not found!");
  }
  const deletedUser = await db("users").where("id", id).delete().returning("*");
  return deletedUser;
}


export const UserService = {
    userSignUp,
    userSignIn,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
};