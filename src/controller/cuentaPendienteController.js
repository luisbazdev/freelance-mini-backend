const cuentaPendienteService = require("../service/cuentaPendienteService");
const asyncWrapper = require("../utils/asyncWrapper");

const cuentaPendienteController = {
  /**
   * Encuentra todas las cuentas pendientes.
   * @param {string} nombre - El nombre del cliente.
   * @param {string} gte - El minimo monto restante a cobrar.
   * @param {string} lt - El maximo monto restante a cobrar.
   * @function findAll
   * @returns {Promise<CuentaPendiente[]>} Una promesa que se resuelve con una lista de cuentas pendientes.
   */
  findAll: async function (nombre, gte, lt) {
    let cuentaPendientes;

    if (nombre) {
      cuentaPendientes = await asyncWrapper(
        cuentaPendienteService.findAllByClientName,
        [nombre, gte, lt]
      );
      return cuentaPendientes;
    }

    cuentaPendientes = await asyncWrapper(cuentaPendienteService.findAll, [
      gte,
      lt,
    ]);
    return cuentaPendientes;
  },
  /**
   * Encuentra una cuenta pendiente por su ID.
   * @function findById
   * @param {string} id - El ID de la cuenta pendiente a buscar.
   * @returns {Promise<CuentaPendiente>} Una promesa que se resuelve con la cuenta pendiente encontrada.
   */
  findById: async function (id) {
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteService.findById,
      [id]
    );
    return cuentaPendiente;
  },
  /**
   * Guarda una cuenta pendiente.
   * @function save
   * @param {CuentaPendiente} _cuentaPendiente - La cuenta pendiente a guardar.
   * @returns {Promise<CuentaPendiente>} Una promesa que se resuelve con la cuenta pendiente guardada.
   */
  save: async function (_cuentaPendiente) {
    const cuentaPendiente = await asyncWrapper(cuentaPendienteService.save, [
      _cuentaPendiente,
    ]);
    return cuentaPendiente;
  },
  /**
   * Actualiza una cuenta pendiente por su ID.
   * @function updateById
   * @param {string} id - El ID de la cuenta pendiente a actualizar.
   * @param {CuentaPendiente} _cuentaPendiente - La cuenta pendiente actualizada.
   * @returns {Promise<CuentaPendiente>} Una promesa que se resuelve con la cuenta pendiente actualizada.
   */
  updateById: async function (id, _cuentaPendiente) {
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteService.updateById,
      [id, _cuentaPendiente]
    );
    return cuentaPendiente;
  },
  /**
   * Elimina una cuenta pendiente por su ID.
   * @function deleteById
   * @param {string} id - El ID de la cuenta pendiente a eliminar.
   * @returns {Promise<CuentaPendiente>} Una promesa que se resuelve con la cuenta pendiente eliminada.
   */
  deleteById: async function (id) {
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteService.deleteById,
      [id]
    );
    return cuentaPendiente;
  },
};

module.exports = cuentaPendienteController;
