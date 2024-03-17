import express from "express";
import { UserRoutes } from "../modules/users/user.routes.js";

const routes = express.Router();


const moduleRoutes = [
  {
    path: "/users",
    routes: UserRoutes,
  }
];

moduleRoutes.forEach((route) => {
    routes.use(route.path, route.routes);
});

export default routes;
