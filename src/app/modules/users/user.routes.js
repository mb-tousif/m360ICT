import express from "express";
import validateRequest from "../../middleware/validateApi.js";
import { userJoiValidation } from "./user.validation.js";
import { UserController } from "./user.controller.js";

const router = express.Router();

router.post(
    '/signup',
    validateRequest(userJoiValidation.userSignInValidation),
    UserController.userSignUp
)

export const UserRoutes = router;