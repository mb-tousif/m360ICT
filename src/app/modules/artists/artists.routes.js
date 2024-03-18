import express from "express";
import authMiddleware from "../../middleware/authMiddleware.js";
import { ArtistController } from "./artists.controller.js";

const router = express.Router();

router.get(
    "/all-artists",
    authMiddleware,
    ArtistController.getAllArtists
);

router.get(
    "/:id",
    authMiddleware,
    ArtistController.getArtistById
);

router.post("/create", 
    authMiddleware,
    ArtistController.createArtist
);

router.patch(
    "/update/:id",
    authMiddleware,
    ArtistController.updateArtist
);

router.delete(
    "/delete/:id",
    authMiddleware,
    ArtistController.deleteArtist
);



export const ArtistRoutes = router;
