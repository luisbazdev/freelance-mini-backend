const mongoose = require("mongoose");

const cobroSchema = new mongoose.Schema({
  id_cliente: mongoose.ObjectId,
  id_cuenta_pendiente: mongoose.ObjectId,
  monto_cobrado: Number,
});

const cobro = mongoose.model("Cobro", cobroSchema);

module.exports = cobro;