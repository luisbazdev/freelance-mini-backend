const mongoose = require("mongoose");

const cuentaPendienteSchema = new mongoose.Schema({
  id_cliente: {
    type: mongoose.ObjectId,
    required: true,
  },
  monto_restante: {
    type: Number,
    required: true,
    min: 0,
    validate: {
      validator: function (value) {
        return value >= 0;
      },
      message: "El monto restante debe ser mayor o igual a 0",
    },
  },
});

cuentaPendienteSchema.pre("deleteOne", async function () {
  const id = this.getQuery()["_id"];
  await mongoose.model("Cobro").deleteMany({ id_cuenta_pendiente: id });
});

const cuentaPendiente = mongoose.model(
  "CuentaPendiente",
  cuentaPendienteSchema
);

module.exports = cuentaPendiente;
