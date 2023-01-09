import express from "express";
import AutorController from "../Controllers/autoresController.js";

const router = express.Router();

router
  .get("/autores", AutorController.listarAutores)
  .get("/autores/:id", AutorController.listarAutorPorId)
  .post('/autores', AutorController.cadastrarAutors)
  .put('/autores/:id', AutorController.atualizarAutor)
  .delete('/autores/:id', AutorController.deletarAutor)


export default router;