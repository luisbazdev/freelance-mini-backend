const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  no_cliente: String,
});

const cliente = mongoose.model("Cliente", clienteSchema);

module.exports = cliente;
