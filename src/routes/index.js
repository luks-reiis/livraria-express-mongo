import express from "express";
import routerLivros from "./livrosRoutes.js";
import routerAutores from "./autoresRouter.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Curso de Node" });
  });

  app.use(express.json(), routerLivros);
  app.use(express.json(), routerAutores);
};

export default routes;
