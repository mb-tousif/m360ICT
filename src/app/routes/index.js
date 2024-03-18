import express from "express";
import { UserRoutes } from "../modules/users/user.routes.js";
import { ArtistRoutes } from "../modules/artists/artists.routes.js";

const routes = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    routes: UserRoutes,
  },
  {
    path: "/artists",
    routes: ArtistRoutes,
  }
];

moduleRoutes.forEach((route) => {
    routes.use(route.path, route.routes);
});

export default routes;
