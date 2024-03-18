import db from "../../../knex/db.config.js";
import ApiError from "../../../shared/ApiError.js";

const createSong = async ( data ) => {
    const isExist = await db("songs").where({ title: data.title }).first();
    if (isExist) {
        throw new ApiError(400, "Song already exists");
    }
    const song = await db("songs").insert(data).returning("*");
    if (!song) {
        throw new ApiError(400, "Song not created");
    }
    return song;
};

const getAllSongs = async () => {
    const songs = await db("songs").select("*");
    if (!songs) {
        throw new ApiError(404, "No song found");
    }
    return songs;
}

const getSongById = async (id) => {
    const song = await db("songs").where({ id }).first();
    if (!song) {
        throw new ApiError(404, "Song not found");
    }
    return song;
}

const updateSong = async (id, data) => {
    const isExist = await db("songs").where({ id }).first();
    if (!isExist) {
        throw new ApiError(404, "Song not found");
    }
    const song = await db("songs").where({ id }).update(data).returning("*");
    if (!song) {
        throw new ApiError(400, "Song not updated");
    }
    return song;
};

const deleteSong = async (id) => {
    const isExist = await db("songs").where({ id }).first();
    if (!isExist) {
        throw new ApiError(404, "Song not found to delete");
    }
    const song = await db("songs").where({ id }).delete().returning("*");
    if (!song) {
        throw new ApiError(400, "Song not deleted");
    }
    return song;
}

export const SongsServices = {
    createSong,
    getAllSongs,
    getSongById,
    updateSong,
    deleteSong
};