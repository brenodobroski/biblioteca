const mongoose = require("mongoose");

let conn;

const connection = () => {
  if (conn) {
    return conn;
  }

  conn = mongoose.connect(
    "mongodb+srv://brenodobroski:qKqwLQx0YsFINiUW@biblioteca.2wjqgfn.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"
  );
};

module.exports = connection;
