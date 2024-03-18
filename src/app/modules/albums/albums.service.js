import db from "../../../knex/db.config.js";
import ApiError from "../../../shared/ApiError.js";

const createAlbum = async ( data) => {
    const isExist = await db("albums").where({ title: data.title }).first();
    if (isExist) {
        throw new ApiError(400, "Album already exists");
    }
    const album = await db("albums").insert(data).returning("*");
    if (!album) {
        throw new ApiError(400, "Album not created");
    }
    return album;
};

const getAllAlbums = async () => {
    const albums = await db("albums").select("*");
    if (!albums) {
        throw new ApiError(404, "No album found");
    }
    return albums;
};

const getAlbumById = async (id) => {
    const album = await db("albums").where({ id }).first();
    if (!album) {
        throw new ApiError(404, "Album not found");
    }
    return album;
};

const updateAlbum = async (id, data) => {
    const album = await db("albums").where({ id }).update(data).returning("*");
    if (!album) {
        throw new ApiError(400, "Album not updated");
    }
    return album;
}

const deleteAlbum = async (id) => {
    const album = await db("albums").where({ id }).delete().returning("*");
    if (!album) {
        throw new ApiError(400, "Album not deleted");
    }
    return album;
};

export const AlbumsServices = {
    createAlbum,
    getAllAlbums,
    getAlbumById,
    updateAlbum,
    deleteAlbum
};