const clienteRepository = require("../repository/clienteRepository");

// perform validations here...

const clienteService = {
  findAllClients: async function () {
    try {
      const clientes = await clienteRepository.findAllClients();
      return clientes;
    } catch (error) {
      console.log("error");
    }
  },
  findClientById: async function (id) {
    try {
      const cliente = await clienteRepository.findClientById(id);
      return cliente;
    } catch (error) {
      console.log(error);
    }
  },
  saveClient: async function (_client) {
    try {
      const cliente = await clienteRepository.saveClient(_client);
      return cliente;
    } catch (error) {
      console.log(error);
    }
  },
  updateClientById: async function (id, _cliente) {
    try {
      const cliente = await clienteRepository.updateClientById(id, _cliente);
      return cliente;
    } catch (error) {
      console.log(error);
    }
  },
  deleteClientById: async function (id) {
    try {
      const cliente = await clienteRepository.deleteClientById(id);
      return cliente;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = clienteService;