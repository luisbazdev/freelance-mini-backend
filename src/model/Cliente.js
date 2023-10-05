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

clienteSchema.pre('deleteOne', async function () {
  const id = this.getQuery()["_id"];
  await mongoose.model('CuentaPendiente').deleteMany({ id_cliente: id });
  await mongoose.model('Cobro').deleteMany({ id_cliente: id });
});

const cliente = mongoose.model("Cliente", clienteSchema);

module.exports = cliente;
