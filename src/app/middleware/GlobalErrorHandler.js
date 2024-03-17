import ValidationError from "joi";
import config from "../../config/index.js";
import ApiError from "../../shared/ApiError.js";
// import handleJoiError from "../../shared/handleJoiError.js";

const globalErrorHandler = (error, req, res, next) => {
  config.env === "development"
    ? console.log(`🐱‍🏍 ErrorHandler `, { error })
    : console.log(`🐱‍🏍 ErrorHandler `, error);

  let statusCode = 500;
  let message = "Something went wrong !";
  let errorMessages = [];

  if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
    errorMessages = [
      {
        path: "",
        message: error.message,
      },
    ];
} else if (error instanceof Error) {
    message = error.message;
    errorMessages = [
      {
        path: "",
        message: error.message,
      },
    ];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== "production" ? error.stack : undefined,
  });
};

export default globalErrorHandler;
