const cuentaPendienteRepository = require("../repository/cuentaPendienteRepository");
const clienteRepository = require("../repository/clienteRepository");

const cuentaPendienteService = {
  findAllCuentaPendientes: async function (gte, lt) {
    try {
      const cuentaPendientes =
        await cuentaPendienteRepository.findAllCuentaPendientes(
          Number(gte),
          Number(lt)
        );
      return cuentaPendientes;
    } catch (error) {
      console.log("error");
    }
  },
  findAllCuentaPendientesByName: async function (nombre, gte, lt) {
    try {
      const cliente = await clienteRepository.findFirstByName(nombre);
      const cuentaPendientes =
        await cuentaPendienteRepository.findAllCuentaPendientesByClientId(
          cliente.id,
          Number(gte),
          Number(lt)
        );
      return cuentaPendientes;
    } catch (error) {
      console.log("error");
    }
  },
  findCuentaPendienteById: async function (id) {
    try {
      const cuentaPendiente =
        await cuentaPendienteRepository.findCuentaPendienteById(id);
      return cuentaPendiente;
    } catch (error) {
      console.log(error);
    }
  },
  saveCuentaPendiente: async function (_client) {
    try {
      const cuentaPendiente =
        await cuentaPendienteRepository.saveCuentaPendiente(_client);
      return cuentaPendiente;
    } catch (error) {
      console.log(error);
    }
  },
  updateCuentaPendienteById: async function (id, _cuentaPendiente) {
    try {
      const cuentaPendiente =
        await cuentaPendienteRepository.updateCuentaPendienteById(
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
        await cuentaPendienteRepository.deleteCuentaPendienteById(id);
      return cuentaPendiente;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = cuentaPendienteService;
