import livros from "../models/Livro.js";

class LivroController {
  static listarLivros = async (req, res) => {
    try {
      const pegaTodosLivros = await livros.find();
      return res.status(200).json(pegaTodosLivros);
    } catch (err) {
      return res
        .status(500)
        .json({ menssage: `${err.message} - Falha ao localizar livros.` });
    }
  };
}

export default LivroController;
