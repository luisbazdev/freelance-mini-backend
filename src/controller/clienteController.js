const clienteService = require("../service/clienteService");
const asyncWrapper = require("../utils/asyncWrapper");

const clienteController = {
  /**
   * Encuentra todos los clientes.
   * @function findAllClients
   * @returns {Promise<Cliente[]>} Una promesa que se resuelve con una lista de clientes.
   */
  findAllClients: async function () {
    const clientes = await asyncWrapper(clienteService.findAllClients);
    return clientes;
  },
  /**
   * Encuentra un cliente por su ID.
   * @function findClientById
   * @param {string} id - El ID del cliente a buscar.
   * @returns {Promise<Cliente>} Una promesa que se resuelve con el cliente encontrado.
   */
  findClientById: async function (id) {
    const cliente = await asyncWrapper(clienteService.findClientById, [id]);
    return cliente;
  },
  /**
   * Guarda un cliente.
   * @function saveClient
   * @param {Cliente} _cliente - El cliente a guardar.
   * @returns {Promise<Cliente>} Una promesa que se resuelve con el cliente guardado.
   */
  saveClient: async function (_cliente) {
    const cliente = await asyncWrapper(clienteService.saveClient, [_cliente]);
    return cliente;
  },
  /**
   * Actualiza un cliente por su ID.
   * @function updateClientById
   * @param {string} id - El ID del cliente a actualizar.
   * @param {Cliente} _cliente - El cliente actualizado.
   * @returns {Promise<Cliente>} Una promesa que se resuelve con el cliente actualizado.
   */
  updateClientById: async function (id, _cliente) {
    const cliente = await asyncWrapper(clienteService.updateClientById, [
      id,
      _cliente,
    ]);
    return cliente;
  },
  /**
   * Elimina un cliente por su ID.
   * @function deleteClientById
   * @param {string} id - El ID del cliente a eliminar.
   * @returns {Promise<Cliente>} Una promesa que se resuelve con el cliente eliminado.
   */
  deleteClientById: async function (id) {
    const cliente = await asyncWrapper(clienteService.deleteClientById, [id]);
    return cliente;
  },
};

module.exports = clienteController;
