import express from "express";
import LivroController from "../controllers/livrosController.js";

const routerLivros = express.Router();

routerLivros.get("/livros", LivroController.listarLivros);
routerLivros.get("/livros/busca", LivroController.listarLivroPorEditora);
routerLivros.get("/livros/:id", LivroController.listarLivroPorId);
routerLivros.post("/livros", LivroController.cadastrarLivro);
routerLivros.put("/livros/:id", LivroController.atualizarLivro);
routerLivros.delete("/livros/:id", LivroController.excluirLivro);

export default routerLivros;
