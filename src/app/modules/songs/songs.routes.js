import express from "express";
import authMiddleware from "../../middleware/authMiddleware.js";
import { SongController } from "./songs.controller.js";

const router = express.Router();

router.get(
    "/all-songs",
    authMiddleware,
    SongController.getAllSongs
);

router.get(
    "/:id",
    authMiddleware,
    SongController.getSongById
);

router.post(
    "/create",
    authMiddleware,
    SongController.createSong
);

router.patch(
    "/update/:id",
    authMiddleware,
    SongController.updateSong
);

router.delete(
    "/delete/:id",
    authMiddleware,
    SongController.deleteSong
);

export const SongsRoutes = router;
