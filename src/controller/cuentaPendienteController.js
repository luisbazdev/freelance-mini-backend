const cuentaPendienteService = require("../service/cuentaPendienteService");

const cuentaPendienteController = {
  findAllCuentaPendientes: async function (nombre, gte, lt) {
    try {
      let cuentaPendientes;

      if (nombre) {
        cuentaPendientes =
          await cuentaPendienteService.findAllCuentaPendientesByName(
            nombre,
            gte,
            lt
          );
        return cuentaPendientes;
      }

      cuentaPendientes = await cuentaPendienteService.findAllCuentaPendientes(
        gte,
        lt
      );
      return cuentaPendientes;
    } catch (error) {
      console.log("error");
    }
  },
  findCuentaPendienteById: async function (id) {
    try {
      const cuentaPendiente =
        await cuentaPendienteService.findCuentaPendienteById(id);
      return cuentaPendiente;
    } catch (error) {
      console.log(error);
    }
  },
  saveCuentaPendiente: async function (_cuentaPendiente) {
    try {
      const cuentaPendiente = await cuentaPendienteService.saveCuentaPendiente(
        _cuentaPendiente
      );
      return cuentaPendiente;
    } catch (error) {
      console.log(error);
    }
  },
  updateCuentaPendienteById: async function (id, _cuentaPendiente) {
    try {
      const cuentaPendiente =
        await cuentaPendienteService.updateCuentaPendienteById(
          id,
          _cuentaPendiente
        );
      return cuentaPendiente;
    } catch (error) {
      console.log(error);
    }
  },
  deleteCuentaPendienteById: async function (id) {
    try {
      const cuentaPendiente =
        await cuentaPendienteService.deleteCuentaPendienteById(id);
      return cuentaPendiente;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = cuentaPendienteController;
