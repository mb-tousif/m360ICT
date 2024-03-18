import express from "express";
import { UserRoutes } from "../modules/users/user.routes.js";
import { ArtistRoutes } from "../modules/artists/artists.routes.js";
import { AlbumsRoutes } from "../modules/albums/albums.routes.js";
import { SongsRoutes } from "../modules/songs/songs.routes.js";

const routes = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    routes: UserRoutes,
  },
  {
    path: "/artists",
    routes: ArtistRoutes,
  },
  {
    path: "/albums",
    routes: AlbumsRoutes,
  },
  {
    path: "/songs",
    routes: SongsRoutes
  }
];

moduleRoutes.forEach((route) => {
    routes.use(route.path, route.routes);
});

export default routes;
