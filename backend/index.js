const express = require("express");
const booksModel = require("./src/model/books");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.delete("/deletar/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({
      data: [],
      message: " ❌ Id inválido",
    });
  }

  const livros = await booksModel.deleteOne({ _id: req.params.id });

  return res.status(200).json({
    data: livros,
    message: "✅ Livro deletado com sucesso",
  });
});

app.put("/editar/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({
      data: [],
      message: " ❌ Id inválido",
    });
  }

  const livros = await booksModel.updateOne({ _id: req.params.id }, req.body);

  return res.status(200).json({
    data: livros,
    message: "✅ Livro editado com sucesso",
  });
});

app.post("/cadastro", async (req, res) => {
  const response = await booksModel.create({
    id: req.body.id,
    titulo: req.body.titulo,
    paginas: req.body.paginas,
    codigoISBN: req.body.codigoISBN,
    editora: req.body.editora,
  });

  return res.status(200).json({
    data: response,
    message: "✅ Livro adicionado com sucesso",
  });
});

app.get("/books", async (req, res) => {
  const livros = await booksModel.find({});

  return res.status(200).json({
    data: livros,
  });
});

app.get("/books/:id", async (req, res) => {
  try {
    const livros = await booksModel.findById(req.params.id);

    return res.status(200).json({
      data: livros,
    });
  } catch (error) {
    return res.status(400).json({
      data: [],
      message: "❌ Nao foi possivel encontrar este ID",
    });
  }
});

app.listen(8080, () => {
  console.log("🔥 Server started at http://localhost:8080");
});
