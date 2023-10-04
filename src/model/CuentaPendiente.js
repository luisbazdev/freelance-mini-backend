const mongoose = require("mongoose");

const cuentaPendienteSchema = new mongoose.Schema({
  id_cliente: {
    type: mongoose.ObjectId,
    required: true,
  },
  monto_restante: {
    type: Number,
    required: true,
  },
});

const cuentaPendiente = mongoose.model(
  "CuentaPendiente",
  cuentaPendienteSchema
);

module.exports = cuentaPendiente;
