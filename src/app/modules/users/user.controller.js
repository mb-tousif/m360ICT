import catchAsync from "../../../shared/catchAsync.js";
import sendResponse from "../../../shared/sendResponse.js";
import { UserService } from "./user.service.js";

const getAllUsers = catchAsync( async (req, res, next) => {
    const users = await UserService.getAllUsers();

    sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All users',
    data: users,
  })
});

// get user by id
const getUserById = catchAsync( async (req, res, next) => {
    const id = req.params.id;
    const user = await UserService.getUserById(id);

    sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User data fetched successfully',
    data: user,
  })
});

const userSignUp = catchAsync( async (req, res, next) => {
    const payload = req.body;
    const user = await UserService.userSignUp(payload);

    sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User created successfully',
    data: user
  })
});

const userSignIn = catchAsync( async (req, res, next) => {
    const payload = req.body;
    const user = await UserService.userSignIn(payload);

    sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User logged in successfully',
    data: user,
  })
});

// update user by id
const updateUserById = catchAsync( async (req, res, next) => {
    const id = req.params.id;
    const payload = req.body;
    const user = await UserService.updateUserById(id, payload);

    sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User updated successfully',
    data: user,
  })
});

// delete user by id
const deleteUserById = catchAsync( async (req, res, next) => {
    const id = req.params.id;
    const user = await UserService.deleteUserById(id);

    sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User deleted successfully',
    data: user,
  })
});

export const UserController = {
    userSignUp,
    userSignIn,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
};