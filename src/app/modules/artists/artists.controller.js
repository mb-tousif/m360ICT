import catchAsync from "../../../shared/catchAsync.js";
import { ArtistServices } from "./artists.service.js";
import sendResponse from "../../../shared/sendResponse.js";

const createArtist = catchAsync(async (req, res) => {
    const artist = req.body;
    const data = await ArtistServices.createArtist(artist);
    sendResponse(res, { 
        statusCode: 201, 
        success: true, 
        message: "Artist created successfully", 
        data 
    });
});

const getAllArtists = catchAsync(async (req, res) => {
    const data = await ArtistServices.getArtists();
    sendResponse(res, { 
        statusCode: 200, 
        success: true, 
        message: "Artists fetched successfully", 
        data 
    });
});

const getArtistById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const data = await ArtistServices.getArtistById(id);
    sendResponse(res, { 
        statusCode: 200, 
        success: true, 
        message: "Artist fetched successfully", 
        data 
    });
});

const updateArtist = catchAsync(async (req, res) => {
    const { id } = req.params;
    const artist = req.body;
    const data = await ArtistServices.updateArtist(id, artist);
    sendResponse(res, { 
        statusCode: 200, 
        success: true, 
        message: "Artist updated successfully", 
        data 
    });
});

const deleteArtist = catchAsync(async (req, res) => {
    const { id } = req.params;
    const data = await ArtistServices.deleteArtist(id);
    sendResponse(res, { 
        statusCode: 200, 
        success: true, 
        message: "Artist deleted successfully", 
        data 
    });
});

export const ArtistController = {
    createArtist,
    getAllArtists,
    getArtistById,
    updateArtist,
    deleteArtist
};