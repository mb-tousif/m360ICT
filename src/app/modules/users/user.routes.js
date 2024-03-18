import express from "express";
import { UserController } from "./user.controller.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const router = express.Router();

router.get(
    '/all-users',
    authMiddleware,
    UserController.getAllUsers
);

router.get(
    '/:id',
    authMiddleware,
    UserController.getUserById
);

router.post(
    '/signup',
    UserController.userSignUp
);

router.post(
    '/login',
    UserController.userSignIn
);

router.patch(
    '/:id',
    authMiddleware,
    UserController.updateUserById
);

router.delete(
    '/:id',
    authMiddleware,
    UserController.deleteUserById
);

export const UserRoutes = router;