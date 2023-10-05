const clienteRepository = require("../repository/clienteRepository");
const asyncWrapper = require("../utils/asyncWrapper");

const clienteService = {
  /**
   * Encuentra todos los clientes.
   * @function findAll
   * @returns {Promise<Cliente[]>} Una promesa que se resuelve con una lista de clientes.
   */
  findAll: async function () {
    const clientes = await asyncWrapper(clienteRepository.findAll);
    return clientes;
  },
  /**
   * Encuentra un cliente por su ID.
   * @function findById
   * @param {string} id - El ID del cliente a buscar.
   * @returns {Promise<Cliente>} Una promesa que se resuelve con el cliente encontrado.
   */
  findById: async function (id) {
    const cliente = await asyncWrapper(clienteRepository.findById, [id]);
    return cliente;
  },
  /**
   * Guarda un cliente.
   * @function save
   * @param {Cliente} _cliente - El cliente a guardar.
   * @returns {Promise<Cliente>} Una promesa que se resuelve con el cliente guardado.
   */
  save: async function (_cliente) {
    const cliente = await asyncWrapper(clienteRepository.save, [
      _cliente,
    ]);
    return cliente;
  },
  /**
   * Actualiza un cliente por su ID.
   * @function updateById
   * @param {string} id - El ID del cliente a actualizar.
   * @param {Cliente} _cliente - El cliente actualizado.
   * @returns {Promise<Cliente>} Una promesa que se resuelve con el cliente actualizado.
   */
  updateById: async function (id, _cliente) {
    const cliente = await asyncWrapper(clienteRepository.updateById, [
      id,
      _cliente,
    ]);
    return cliente;
  },
  /**
   * Elimina un cliente por su ID.
   * @function deleteById
   * @param {string} id - El ID del cliente a eliminar.
   * @returns {Promise<Cliente>} Una promesa que se resuelve con el cliente eliminado.
   */
  deleteById: async function (id) {
    const cliente = await asyncWrapper(clienteRepository.deleteById, [
      id,
    ]);
    return cliente;
  },
};

module.exports = clienteService;
