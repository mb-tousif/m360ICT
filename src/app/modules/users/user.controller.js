import catchAsync from "../../../shared/catchAsync.js";
import sendResponse from "../../../shared/sendResponse.js";
import { UserService } from "./user.service.js";

const userSignUp = catchAsync( async (req, res, next) => {
    const payload = req.body;
    const user = await UserService.userSignUp(payload);

    sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User created successfully',
    data: user,
  })
});

export const UserController = {
    userSignUp
};