import express from "express";
import cors from "cors";
import config from "./config/index.js";
import globalErrorHandler from "./app/middleware/GlobalErrorHandler.js";
import routes from "./app/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);
app.get("/", (req, res) => {
  res.send(
    `<h1 style='text-align: center; padding: 20px; color:green'>${config.app_name} Server is Running!</h1>`
  );
});

//global error handler
app.use(globalErrorHandler);

//handle not found
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});

export default app;