const clienteRepository = require("../repository/clienteRepository");
const asyncWrapper = require('../utils/asyncWrapper')

const clienteService = {
  findAllClients: async function () {
    const clientes = await asyncWrapper(clienteRepository.findAllClients);
    return clientes;
  },
  findClientById: async function (id) {
    const cliente = await asyncWrapper(clienteRepository.findClientById, [id]);
    return cliente;
  },
  saveClient: async function (_client) {
    const cliente = await asyncWrapper(clienteRepository.saveClient, [_client]);
    return cliente;
  },
  updateClientById: async function (id, _cliente) {
    const cliente = await asyncWrapper(clienteRepository.updateClientById, [id, _cliente]);
    return cliente;
  },
  deleteClientById: async function (id) {
    const cliente = await asyncWrapper(clienteRepository.deleteClientById, [id]);
    return cliente;
  },
};

module.exports = clienteService;