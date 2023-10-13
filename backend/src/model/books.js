const mongoose = require("mongoose");
const conn = require("../../config/mongo");

conn();

const booksSchema = mongoose.Schema(
  {
    id: Number,
    titulo: String,
    paginas: Number,
    codigoISBN: Number,
    editora: String,
  },
  {
    timestamps: true,
  }
);

const booksModel = mongoose.model("books", booksSchema);

module.exports = booksModel;
