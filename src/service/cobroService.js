const mongoose = require("mongoose");

const CuentaPendiente = require("../model/CuentaPendiente");
const Cobro = require("../model/Cobro");

const cobroRepository = require("../repository/cobroRepository");
const cuentaPendienteRepository = require("../repository/cuentaPendienteRepository");

const asyncWrapper = require('../utils/asyncWrapper')

const cobroService = {
  findAllCobros: async function () {
      const cobros = await asyncWrapper(cobroRepository.findAllCobros)
      return cobros;
  },
  findCobroById: async function (id) {
      const cobro = await asyncWrapper(cobroRepository.findCobroById, [id]);
      return cobro;
  },
  saveCobro: async function (_cobro) {
    // remember to close the session
    try {
      const session = await mongoose.startSession();
      const { id_cliente, id_cuenta_pendiente, monto_cobrado } = _cobro;

      const cuentaPendiente =
        await cuentaPendienteRepository.findCuentaPendienteById(
          id_cuenta_pendiente
        );

      if (cuentaPendiente.id_cliente != id_cliente)
        throw new Error("Esta cuenta no pertenece al cliente!");

      if (cuentaPendiente.monto_restante < monto_cobrado)
        throw new Error("No puedes cobrar al cliente mas de lo que tiene!");

      session.startTransaction();

      // restarle dinero al cliente
      await CuentaPendiente.findByIdAndUpdate(
        id_cuenta_pendiente,
        { $inc: { monto_restante: -monto_cobrado } },
        { session }
      );

      // registrar cobro
      const cobro = await Cobro.create(_cobro, { session });

      // Commit the transaction
      await session.commitTransaction();

      return cobro;
    } catch (error) {
      //await session.abortTransaction();
      throw error;
    }
    /*finally {
      // End the session
      session.endSession();

      // Close the MongoDB connection
      mongoose.connection.close();
    }*/
  },
  updateCobroById: async function (id, _cobro) {
      const cobro = await asyncWrapper(cobroRepository.updateCobroById, [id, _cobro]);
      return cobro;
  },
  deleteCobroById: async function (id) {
      const cobro = await asyncWrapper(cobroRepository.deleteCobroById, [id]);
      return cobro;
  },
};

module.exports = cobroService;
