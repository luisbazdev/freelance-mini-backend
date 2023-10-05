const CuentaPendiente = require("../model/CuentaPendiente");
const createQueryObject = require("../utils/query");

const cuentaPendienteRepository = {
  /**
   * Encuentra todas las cuentas pendientes.
   * @function findAll
   * @param {number} gte - El minimo monto restante a cobrar.
   * @param {number} lt - El maximo monto restante a cobrar.
   * @returns {Promise<CuentaPendiente[]>} Una promesa que se resuelve con una lista de cuentas pendientes.
   * @throws {Error} Si ocurre un error al obtener los de cuentas pendientes.
   */
  findAll: async function (gte, lt) {
    try {
      let query = {};
      query = createQueryObject(query, gte, lt);

      const cuentaPendientes = await CuentaPendiente.find(query);
      return cuentaPendientes;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Encuentra todas las cuentas pendientes que pertenezcan a un cliente con un ID especifico.
   * @function findAllByClientId
   * @param {string} clientId - El ID del cliente.
   * @param {number} gte - El minimo monto restante a cobrar.
   * @param {number} lt - El maximo monto restante a cobrar.
   * @returns {Promise<CuentaPendiente[]>} Una promesa que se resuelve con una lista de cuentas pendientes.
   * @throws {Error} Si ocurre un error al buscar el cuentaPendiente.
   */
  findAllByClientId: async function (clientId, gte, lt) {
    try {
      let query = { id_cliente: clientId };
      query = createQueryObject(query, gte, lt);

      const cuentaPendientes = await CuentaPendiente.find(query);
      return cuentaPendientes;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Encuentra una cuenta pendiente por su ID.
   * @function findById
   * @param {string} id - El ID de la cuenta pendiente a buscar.
   * @returns {Promise<CuentaPendiente>} Una promesa que se resuelve con la cuenta pendiente encontrada.
   * @throws {Error} Si ocurre un error al buscar la cuenta pendiente.
   */
  findById: async function (id) {
    try {
      const cuentaPendiente = await CuentaPendiente.findById(id);
      return cuentaPendiente;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Guarda una cuenta pendiente.
   * @function save
   * @param {CuentaPendiente} _cuentaPendiente - La cuenta pendiente a guardar.
   * @returns {Promise<CuentaPendiente>} Una promesa que se resuelve con la cuenta pendiente guardada.
   * @throws {Error} Si ocurre un error al guardar la cuenta pendiente.
   */
  save: async function (_cuentaPendiente) {
    try {
      const cuentaPendiente = await CuentaPendiente.create(_cuentaPendiente);
      return cuentaPendiente;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Actualiza una cuenta pendiente por su ID.
   * @function updateById
   * @param {string} id - El ID de la cuenta pendiente a actualizar.
   * @param {CuentaPendiente} _cuentaPendiente - La cuenta pendiente actualizada.
   * @returns {Promise<CuentaPendiente>} Una promesa que se resuelve con la cuenta pendiente actualizada.
   * @throws {Error} Si ocurre un error al actualizar la cuenta pendiente.
   */
  updateById: async function (id, _cuentaPendiente) {
    try {
      const cuentaPendiente = await CuentaPendiente.findByIdAndUpdate(
        id,
        _cuentaPendiente,
        {
          returnDocument: "after",
        }
      );
      return cuentaPendiente;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Elimina una cuenta pendiente por su ID.
   * @function deleteById
   * @param {string} id - El ID de la cuenta pendiente a eliminar.
   * @returns {Promise<CuentaPendiente>} Una promesa que se resuelve con la cuenta pendiente eliminada.
   * @throws {Error} Si ocurre un error al eliminar la cuenta pendiente.
   */
  deleteById: async function (id) {
    try {
      const cuentaPendiente = await CuentaPendiente.findById(id);
      await CuentaPendiente.deleteOne({ _id: cuentaPendiente.id })
      return cuentaPendiente;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = cuentaPendienteRepository;
