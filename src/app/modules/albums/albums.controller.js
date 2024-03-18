import catchAsync from "../../../shared/catchAsync.js";
import { AlbumsServices } from "./albums.service.js";

const createAlbum = catchAsync(async (req, res) => {
    const album = req.body;
    const data = await AlbumsServices.createAlbum(album);
    sendResponse(res, { 
        statusCode: 201, 
        success: true, 
        message: "Album created successfully", 
        data 
    });
});

const getAllAlbums = catchAsync(async (req, res) => {
    const data = await AlbumsServices.getAllAlbums();
    sendResponse(res, { 
        statusCode: 200, 
        success: true, 
        message: "Albums fetched successfully", 
        data 
    });
});

const getAlbumById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const data = await AlbumsServices.getAlbumById(id);
    sendResponse(res, { 
        statusCode: 200, 
        success: true, 
        message: "Album fetched successfully", 
        data 
    });
});

const updateAlbum = catchAsync(async (req, res) => {
    const { id } = req.params;
    const album = req.body;
    const data = await AlbumsServices.updateAlbum(id, album);
    sendResponse(res, { 
        statusCode: 200, 
        success: true, 
        message: "Album updated successfully", 
        data 
    });
});

const deleteAlbum = catchAsync(async (req, res) => {
    const { id } = req.params;
    const data = await AlbumsServices.deleteAlbum(id);
    sendResponse(res, { 
        statusCode: 200, 
        success: true, 
        message: "Album deleted successfully", 
        data 
    });
});

export const AlbumController = {
    createAlbum,
    getAllAlbums,
    getAlbumById,
    updateAlbum,
    deleteAlbum
};