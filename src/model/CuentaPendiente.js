const mongoose = require("mongoose");

const cuentaPendienteSchema = new mongoose.Schema({
  id_cliente: mongoose.ObjectId,
  monto_restante: Number,
});

const cuentaPendiente = mongoose.model(
  "CuentaPendiente",
  cuentaPendienteSchema
);

module.exports = cuentaPendiente;
