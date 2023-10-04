const CuentaPendiente = require("../model/CuentaPendiente");
const createQueryObject = require("../utils/query");

const cuentaPendienteRepository = {
  findAllCuentaPendientes: async function (gte, lt) {
    try {
      const query = {};
      query = createQueryObject(query, gte, lt);

      const cuentaPendientes = await CuentaPendiente.find(query);
      return cuentaPendientes;
    } catch (error) {
      throw error;
    }
  },
  findAllCuentaPendientesByClientId: async function (clientId, gte, lt) {
    try {
      const query = { id_cliente: clientId };
      query = createQueryObject(query, gte, lt);

      const cuentaPendientes = await CuentaPendiente.find(query);
      return cuentaPendientes;
    } catch (error) {
      throw error;
    }
  },
  findCuentaPendienteById: async function (id) {
    try {
      const cuentaPendiente = await CuentaPendiente.findById(id);
      return cuentaPendiente;
    } catch (error) {
      throw error;
    }
  },
  saveCuentaPendiente: async function (_cuentaPendiente) {
    try {
      const cuentaPendiente = await CuentaPendiente.create(_cuentaPendiente);
      return cuentaPendiente;
    } catch (error) {
      throw error;
    }
  },
  updateCuentaPendienteById: async function (id, _cuentaPendiente) {
    try {
      const cuentaPendiente = await CuentaPendiente.findByIdAndUpdate(
        id,
        _cuentaPendiente
      );
      return cuentaPendiente;
    } catch (error) {
      throw error;
    }
  },
  deleteCuentaPendienteById: async function (id) {
    try {
      const cuentaPendiente = await CuentaPendiente.findByIdAndRemove(id);
      return cuentaPendiente;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = cuentaPendienteRepository;
