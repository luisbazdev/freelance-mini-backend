const mongoose = require("mongoose");

const cobroSchema = new mongoose.Schema({
  id_cliente: {
    type: mongoose.ObjectId,
    required: true,
  },
  id_cuenta_pendiente: {
    type: mongoose.ObjectId,
    required: true,
  },
  monto_cobrado: {
    type: Number,
    required: true,
  },
});

const cobro = mongoose.model("Cobro", cobroSchema);

module.exports = cobro;
