const Cliente = require("../model/Cliente");

const clienteRepository = {
  /**
   * Encuentra todos los clientes.
   * @function findAllClients
   * @returns {Promise<Cliente[]>} Una promesa que se resuelve con una lista de clientes.
   * @throws {Error} Si ocurre un error al obtener los clientes.
   */
  findAllClients: async function () {
    try {
      const clientes = await Cliente.find({});
      return clientes;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Encuentra un cliente por su ID.
   * @function findClientById
   * @param {string} id - El ID del cliente a buscar.
   * @returns {Promise<Cliente>} Una promesa que se resuelve con el cliente encontrado.
   * @throws {Error} Si ocurre un error al buscar el cliente.
   */
  findClientById: async function (id) {
    try {
      const cliente = await Cliente.findById(id);
      return cliente;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Encuentra el primer cliente por su nombre.
   * @function findFirstByName
   * @param {string} nombre - El nombre del cliente a buscar.
   * @returns {Promise<Cliente>} Una promesa que se resuelve con el cliente encontrado.
   * @throws {Error} Si ocurre un error al buscar el cliente.
   */
  findFirstByName: async function (nombre) {
    try {
      const cliente = await Cliente.findOne({
        name: { $regex: nombre, $options: "i" },
      });
      return cliente;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Guarda un cliente.
   * @function saveClient
   * @param {Cliente} _client - El cliente a guardar.
   * @returns {Promise<Cliente>} Una promesa que se resuelve con el cliente guardado.
   * @throws {Error} Si ocurre un error al guardar el cliente.
   */
  saveClient: async function (_client) {
    try {
      const cliente = await Cliente.create(_client);
      return cliente;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Actualiza un cliente por su ID.
   * @function updateClientById
   * @param {string} id - El ID del cliente a actualizar.
   * @param {Cliente} _cliente - El cliente actualizado.
   * @returns {Promise<Cliente>} Una promesa que se resuelve con el cliente actualizado.
   * @throws {Error} Si ocurre un error al actualizar el cliente.
   */
  updateClientById: async function (id, _cliente) {
    try {
      const cliente = await Cliente.findByIdAndUpdate(id, _cliente);
      return cliente;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Elimina un cliente por su ID.
   * @function deleteClientById
   * @param {string} id - El ID del cliente a eliminar.
   * @returns {Promise<Cliente>} Una promesa que se resuelve con el cliente eliminado.
   * @throws {Error} Si ocurre un error al eliminar el cliente.
   */
  deleteClientById: async function (id) {
    try {
      const cliente = await Cliente.findByIdAndRemove(id);
      return cliente;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Verifica la existencia de un cliente.
   * @function deleteClientById
   * @param {string} id - El ID del cliente.
   * @returns {Promise<Boolean>} Una promesa que se resuelve con el estado de cliente.
   * @throws {Error} Si ocurre un error al verificar la existencia del cliente.
   */
  exists: async function (id) {
    try {
      const usuarioExiste = await Cliente.exists({ _id: id });
      return usuarioExiste ? true : false;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = clienteRepository;
