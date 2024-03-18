import express from "express";
import authMiddleware from "../../middleware/authMiddleware.js";
import { AlbumController } from "./albums.controller.js";

const router = express.Router();

router.get(
    "/all-albums",
    authMiddleware,
    AlbumController.getAllAlbums
);

router.get(
    "/:id",
    authMiddleware,
    AlbumController.getAlbumById
);

router.post(
    "/create",
    authMiddleware,
    AlbumController.createAlbum
);

router.patch(
    "/update/:id",
    authMiddleware,
    AlbumController.updateAlbum
);

router.delete(
    "/delete/:id",
    authMiddleware,
    AlbumController.deleteAlbum
);

export const AlbumsRoutes = router;
