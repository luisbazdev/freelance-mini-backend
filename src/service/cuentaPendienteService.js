const cuentaPendienteRepository = require("../repository/cuentaPendienteRepository");
const clienteRepository = require("../repository/clienteRepository");
const asyncWrapper = require("../utils/asyncWrapper");

const cuentaPendienteService = {
  /**
   * Encuentra todas las cuentas pendientes.
   * @function findAllCuentaPendientes
   * @param {string} gte - El minimo monto restante a cobrar.
   * @param {string} lt - El maximo monto restante a cobrar.
   * @returns {Promise<CuentaPendiente[]>} Una promesa que se resuelve con una lista de cuentas pendientes.
   */
  findAllCuentaPendientes: async function (gte, lt) {
    const cuentaPendientes = await asyncWrapper(
      cuentaPendienteRepository.findAllCuentaPendientes,
      [Number(gte), Number(lt)]
    );
    return cuentaPendientes;
  },
  /**
   * Encuentra todas las cuentas pendientes que pertenezcan a un cliente con un nombre especifico.
   * @function findAllCuentaPendientesByName
   * @param {string} nombre - El nombre del cliente.
   * @param {string} gte - El minimo monto restante a cobrar.
   * @param {string} lt - El maximo monto restante a cobrar.
   * @returns {Promise<CuentaPendiente[]>} Una promesa que se resuelve con una lista de cuentas pendientes.
   */
  findAllCuentaPendientesByName: async function (nombre, gte, lt) {
    const cliente = await asyncWrapper(clienteRepository.findFirstByName, [
      nombre,
    ]);
    const cuentaPendientes = await asyncWrapper(
      cuentaPendienteRepository.findAllCuentaPendientesByClientId,
      [cliente.id, Number(gte), Number(lt)]
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
      cuentaPendienteRepository.findCuentaPendienteById,
      [id]
    );
    return cuentaPendiente;
  },
  /**
   * Guarda una cuenta pendiente.
   * @function saveCuentaPendiente
   * @param {CuentaPendiente} _cuentaPendiente - La cuenta pendiente a guardar.
   * @returns {Promise<CuentaPendiente>} Una promesa que se resuelve con la cuenta pendiente guardada.
   * @throws {ValidationError} Si ocurre un error al guardar la cuenta pendiente.
   */
  saveCuentaPendiente: async function (_cuentaPendiente) {
    const usuarioExiste = await asyncWrapper(clienteRepository.exists, [
      _cuentaPendiente.id_cliente,
    ]);

    // Si el usuario no existe, o el monto a pagar
    // es negativo o igual a cero, terminar aqui
    if (!usuarioExiste || _cuentaPendiente.monto_restante <= 0) {
      const error = new Error("La validacion no fue exitosa");
      error.name = "ValidationError";
      throw error;
    }

    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteRepository.saveCuentaPendiente,
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
   * @throws {ValidationError} Si ocurre un error al actualizar la cuenta pendiente.
   */
  updateCuentaPendienteById: async function (id, _cuentaPendiente) {
    // Si el monto es negativo, terminar aqui
    if (_cuentaPendiente.monto_restante < 0) {
      const error = new Error("La validacion no fue exitosa");
      error.name = "ValidationError";
      throw error;
    }
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteRepository.updateCuentaPendienteById,
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
      cuentaPendienteRepository.deleteCuentaPendienteById,
      [id]
    );
    return cuentaPendiente;
  },
};

module.exports = cuentaPendienteService;
