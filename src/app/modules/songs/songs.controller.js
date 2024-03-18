import catchAsync from "../../../shared/catchAsync.js";

const createSong = catchAsync(async (req, res) => {
    const song = req.body;
    const data = await SongsServices.createSong(song);
    sendResponse(res, { 
        statusCode: 201, 
        success: true, 
        message: "Song created successfully", 
        data 
    });
});

const getAllSongs = catchAsync(async (req, res) => {
    const data = await SongsServices.getAllSongs();
    sendResponse(res, { 
        statusCode: 200, 
        success: true, 
        message: "Songs fetched successfully", 
        data 
    });
});

const getSongById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const data = await SongsServices.getSongById(id);
    sendResponse(res, { 
        statusCode: 200, 
        success: true, 
        message: "Song fetched successfully", 
        data 
    });
});

const updateSong = catchAsync(async (req, res) => {
    const { id } = req.params;
    const song = req.body;
    const data = await SongsServices.updateSong(id, song);
    sendResponse(res, { 
        statusCode: 200, 
        success: true, 
        message: "Song updated successfully", 
        data 
    });
});

const deleteSong = catchAsync(async (req, res) => {
    const { id } = req.params;
    const data = await SongsServices.deleteSong(id);
    sendResponse(res, { 
        statusCode: 200, 
        success: true, 
        message: "Song deleted successfully", 
        data 
    });
});

export const SongController = {
    createSong,
    getAllSongs,
    getSongById,
    updateSong,
    deleteSong
};