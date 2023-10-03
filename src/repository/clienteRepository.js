const Cliente = require("../model/Cliente");

const clienteRepository = {
  findFirstByName: async function (nombre) {
    try {
      const cliente = await Cliente.findOne({
        name: { $regex: nombre, $options: "i" },
      });
      return cliente;
    } catch (error) {
      console.log(error);
    }
  },
  findAllClients: async function () {
    try {
      const clientes = await Cliente.find({});
      return clientes;
    } catch (error) {
      console.log("error");
    }
  },
  findClientById: async function (id) {
    try {
      const cliente = await Cliente.findById(id);
      return cliente;
    } catch (error) {
      console.log(error);
    }
  },
  saveClient: async function (_client) {
    try {
      const cliente = await Cliente.create(_client);
      return cliente;
    } catch (error) {
      console.log(error);
    }
  },
  updateClientById: async function (id, _cliente) {
    try {
      const cliente = await Cliente.findByIdAndUpdate(id, _cliente);
      return cliente;
    } catch (error) {
      console.log(error);
    }
  },
  deleteClientById: async function (id) {
    try {
      const cliente = await Cliente.findByIdAndRemove(id);
      return cliente;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = clienteRepository;
