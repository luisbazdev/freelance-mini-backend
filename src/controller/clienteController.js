const clienteService = require('../service/clienteService');

const clienteController = {
  findAllClients: async function () {
    try {
      const clientes = await clienteService.findAllClients();
      return clientes;
    } catch (error) {
      console.log("error");
    }
  },
  findClientById: async function (id) {
    try {
      const cliente = await clienteService.findClientById(id);
      return cliente;
    } catch (error) {
      console.log(error);
    }
  },
  saveClient: async function (_client) {
    try {
      const cliente = await clienteService.saveClient(_client);
      return cliente;
    } catch (error) {
      console.log(error);
    }
  },
  updateClientById: async function (id, _cliente) {
    try {
      const cliente = await clienteService.updateClientById(id, _cliente);
      return cliente;
    } catch (error) {
      console.log(error);
    }
  },
  deleteClientById: async function (id) {
    try {
      const cliente = await clienteService.deleteClientById(id);
      return cliente;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = clienteController;