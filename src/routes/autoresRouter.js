import express from "express";
import AutorController from "../controllers/autoresController.js";

const routerAutores = express.Router();

routerAutores.get("/autores", AutorController.listarAutores);
routerAutores.get("/autores/:id", AutorController.listarAutorPorId);
routerAutores.post("/autores", AutorController.cadastrarAutor);
routerAutores.put("/autores/:id", AutorController.atualizarAutor);
routerAutores.delete("/autores/:id", AutorController.excluirAutor);

export default routerAutores;
