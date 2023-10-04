const clienteService = require('../service/clienteService');
const asyncWrapper = require('../utils/asyncWrapper')

const clienteController = {
  findAllClients: async function () {
    const clientes = await asyncWrapper(clienteService.findAllClients);
    return clientes;
  },
  findClientById: async function (id) {
    const cliente = await asyncWrapper(clienteService.findClientById, [id]);
    return cliente;
  },
  saveClient: async function (_cliente) {
    const cliente = await asyncWrapper(clienteService.saveClient, [_cliente]);
    return cliente;
  },
  updateClientById: async function (id, _cliente) {
    const cliente = await asyncWrapper(clienteService.updateClientById, [id, _cliente]);
    return cliente;
  },
  deleteClientById: async function (id) {
    const cliente = await asyncWrapper(clienteService.deleteClientById, [id]);
    return cliente;
  },
};

module.exports = clienteController;