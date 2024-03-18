import db from "../../../knex/db.config.js";
import ApiError from "../../../shared/ApiError.js";

// Create artist
const createArtist = async (data) => {
    const isExist = await db("artists").where({ name: data.name }).first();
    if (isExist) {
        throw new ApiError(400, "Artist already exists");
    }
    const artist = await db("artists").insert(data).returning("*");
    if (!artist) {
        throw new ApiError(400, "Artist not created");
    }
    return artist;
};

// Get all artists
const getArtists = async () => {
    const artists = await db("artists").select("*");
    if (!artists) {
        throw new ApiError(404, "No artist found");
    }
    return artists;
};

// Get artist by id
const getArtistById = async (id) => {
    const artist = await db("artists").where({ id }).first();
    if (!artist) {
        throw new ApiError(404, "Artist not found");
    }
    return artist;
};

// Update artist
const updateArtist = async (id, data) => {
    const artist = await db("artists").where({ id }).update(data).returning("*");
    if (!artist) {
        throw new ApiError(400, "Artist not updated");
    }
    return artist;
};

// Delete artist
const deleteArtist = async (id) => {
    const artist = await db("artists").where({ id }).delete().returning("*");
    if (!artist) {
        throw new ApiError(400, "Artist not deleted");
    }
    return artist;
};

export const ArtistServices = {
    createArtist,
    getArtists,
    getArtistById,
    updateArtist,
    deleteArtist
};