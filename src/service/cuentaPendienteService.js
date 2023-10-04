const cuentaPendienteRepository = require("../repository/cuentaPendienteRepository");
const clienteRepository = require("../repository/clienteRepository");
const asyncWrapper = require("../utils/asyncWrapper");

const cuentaPendienteService = {
  findAllCuentaPendientes: async function (gte, lt) {
    const cuentaPendientes = await asyncWrapper(
      cuentaPendienteRepository.findAllCuentaPendientes,
      [Number(gte), Number(lt)]
    );
    return cuentaPendientes;
  },
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
  findCuentaPendienteById: async function (id) {
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteRepository.findCuentaPendienteById,
      [id]
    );
    return cuentaPendiente;
  },
  saveCuentaPendiente: async function (_client) {
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteRepository.saveCuentaPendiente,
      [_client]
    );
    return cuentaPendiente;
  },
  updateCuentaPendienteById: async function (id, _cuentaPendiente) {
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteRepository.updateCuentaPendienteById,
      [id, _cuentaPendiente]
    );
    return cuentaPendiente;
  },
  deleteCuentaPendienteById: async function (id) {
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteRepository.deleteCuentaPendienteById,
      [id]
    );
    return cuentaPendiente;
  },
};

module.exports = cuentaPendienteService;
