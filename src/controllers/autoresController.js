import autores from "../models/Autor.js";

class AutorController {
  static listarAutores = async (req, res) => {
    try {
      const pegaTodosAutores = await autores.find();
      return res.status(200).json(pegaTodosAutores);
    } catch (err) {
      return res
        .status(500)
        .json({ menssage: `${err.message} - Falha ao localizar os autores.` });
    }
  };

  static listarAutorPorId = (req, res) => {
    const id = req.params.id;

    autores.findById(id, (error, autores) => {
      if (error) {
        res
          .status(400)
          .send({ message: `${error.message} - Id do autor não encontrado.` });
      } else {
        res.status(200).send(autores);
      }
    });
  };

  static cadastrarAutor = (req, res) => {
    let autor = new autores(req.body);

    autor.save((error) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - falha ao cadastrar o autor.` });
      } else {
        res.status(201).send(autor.toJSON());
      }
    });
  };

  static atualizarAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if (!error) {
        res.status(200).send({ message: "Autor atualizado com sucesso." });
      } else {
        res.status(500).send({ message: error.message });
      }
    });
  };

  static excluirAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndDelete(id, (error) => {
      if (!error) {
        res.status(200).send({ message: "Autor removido com sucesso." });
      } else {
        res.status(500).send({ message: error.message });
      }
    });
  };
}

export default AutorController;
