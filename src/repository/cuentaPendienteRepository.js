const CuentaPendiente = require("../model/CuentaPendiente");

const cuentaPendienteRepository = {
  findAllCuentaPendientes: async function (gte, lt) {
    try {
      const query = {}

      if(!isNaN(gte)){
        query.monto_restante = {};
        query.monto_restante.$gte = gte;
      }
      
      if(!isNaN(lt)){
        query.monto_restante = query.monto_restante || {};
        query.monto_restante.$lt = lt;
      }

      const cuentaPendientes = await CuentaPendiente.find(query);
      return cuentaPendientes;
    } catch (error) {
      console.log(error)
    }
  },
  findAllCuentaPendientesByClientId: async function (clientId, gte, lt) {
    try {
      // create util function for this
      const query = {
        id_cliente: clientId
      }

      if(!isNaN(gte)){
        query.monto_restante = {};
        query.monto_restante.$gte = gte;
      }
      
      if(!isNaN(lt)){
        query.monto_restante = query.monto_restante || {};
        query.monto_restante.$lt = lt;
      }
      console.log(query)
      const cuentaPendientes = await CuentaPendiente.find(query);
      return cuentaPendientes;
    } catch (error) {
      console.log("error");
    }
  },
  findCuentaPendienteById: async function (id) {
    try {
      const cuentaPendiente = await CuentaPendiente.findById(id);
      return cuentaPendiente;
    } catch (error) {
      console.log(error);
    }
  },
  saveCuentaPendiente: async function (_cuentaPendiente) {
    try {
      const cuentaPendiente = await CuentaPendiente.create(_cuentaPendiente);
      console.log(cuentaPendiente);
      return cuentaPendiente;
    } catch (error) {
      console.log(error);
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
      console.log(error);
    }
  },
  deleteCuentaPendienteById: async function (id) {
    try {
      const cuentaPendiente = await CuentaPendiente.findByIdAndRemove(id);
      return cuentaPendiente;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = cuentaPendienteRepository;
