const cuentaPendienteService = require("../service/cuentaPendienteService");
const asyncWrapper = require("../utils/asyncWrapper");

const cuentaPendienteController = {
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
      cuentaPendienteService.findAllCuentaPendientes[(gte, lt)]
    );
    return cuentaPendientes;
  },
  findCuentaPendienteById: async function (id) {
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteService.findCuentaPendienteById,
      [id]
    );
    return cuentaPendiente;
  },
  saveCuentaPendiente: async function (_cuentaPendiente) {
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteService.saveCuentaPendiente[_cuentaPendiente]
    );
    return cuentaPendiente;
  },
  updateCuentaPendienteById: async function (id, _cuentaPendiente) {
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteService.updateCuentaPendienteById([id, _cuentaPendiente])
    );
    return cuentaPendiente;
  },
  deleteCuentaPendienteById: async function (id) {
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteService.deleteCuentaPendienteById,
      [id]
    );
    return cuentaPendiente;
  },
};

module.exports = cuentaPendienteController;
