const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  no_cliente: {
    type: String,
    required: true,
  },
});

const cliente = mongoose.model("Cliente", clienteSchema);

module.exports = cliente;
