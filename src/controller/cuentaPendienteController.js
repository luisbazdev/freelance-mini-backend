const cuentaPendienteService = require("../service/cuentaPendienteService");
const asyncWrapper = require("../utils/asyncWrapper");

const cuentaPendienteController = {
  /**
   * Encuentra todas las cuentas pendientes.
   * @param {string} nombre - El nombre del cliente.
   * @param {string} gte - El minimo monto restante a cobrar.
   * @param {string} lt - El maximo monto restante a cobrar.
   * @function findAllCuentaPendientes
   * @returns {Promise<CuentaPendiente[]>} Una promesa que se resuelve con una lista de cuentas pendientes.
   */
  findAllCuentaPendientes: async function (nombre, gte, lt) {
    let cuentaPendientes;

    if (nombre) {
      cuentaPendientes = await asyncWrapper(
        cuentaPendienteService.findAllCuentaPendientesByName,
        [nombre, gte, lt]
      );
      return cuentaPendientes;
    }

    cuentaPendientes = await asyncWrapper(
      cuentaPendienteService.findAllCuentaPendientes,
      [gte, lt]
    );
    return cuentaPendientes;
  },
  /**
   * Encuentra una cuenta pendiente por su ID.
   * @function findCuentaPendienteById
   * @param {string} id - El ID de la cuenta pendiente a buscar.
   * @returns {Promise<CuentaPendiente>} Una promesa que se resuelve con la cuenta pendiente encontrada.
   */
  findCuentaPendienteById: async function (id) {
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteService.findCuentaPendienteById,
      [id]
    );
    return cuentaPendiente;
  },
  /**
   * Guarda una cuenta pendiente.
   * @function saveCuentaPendiente
   * @param {CuentaPendiente} _cuentaPendiente - La cuenta pendiente a guardar.
   * @returns {Promise<CuentaPendiente>} Una promesa que se resuelve con la cuenta pendiente guardada.
   */
  saveCuentaPendiente: async function (_cuentaPendiente) {
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteService.saveCuentaPendiente,
      [_cuentaPendiente]
    );
    return cuentaPendiente;
  },
  /**
   * Actualiza una cuenta pendiente por su ID.
   * @function updateCuentaPendienteById
   * @param {string} id - El ID de la cuenta pendiente a actualizar.
   * @param {CuentaPendiente} _cuentaPendiente - La cuenta pendiente actualizada.
   * @returns {Promise<CuentaPendiente>} Una promesa que se resuelve con la cuenta pendiente actualizada.
   */
  updateCuentaPendienteById: async function (id, _cuentaPendiente) {
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteService.updateCuentaPendienteById,
      [id, _cuentaPendiente]
    );
    return cuentaPendiente;
  },
  /**
   * Elimina una cuenta pendiente por su ID.
   * @function deleteCuentaPendienteById
   * @param {string} id - El ID de la cuenta pendiente a eliminar.
   * @returns {Promise<CuentaPendiente>} Una promesa que se resuelve con la cuenta pendiente eliminada.
   */
  deleteCuentaPendienteById: async function (id) {
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteService.deleteCuentaPendienteById,
      [id]
    );
    return cuentaPendiente;
  },
};

module.exports = cuentaPendienteController;
