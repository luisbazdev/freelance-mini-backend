const mongoose = require("mongoose");

const CuentaPendiente = require("../model/CuentaPendiente");
const Cobro = require("../model/Cobro");

const cobroRepository = require("../repository/cobroRepository");
const cuentaPendienteRepository = require("../repository/cuentaPendienteRepository");

// perform validations here...

const cobroService = {
  findAllCobros: async function () {
    try {
      const cobros = await cobroRepository.findAllCobros();
      return cobros;
    } catch (error) {
      console.log("error");
    }
  },
  findCobroById: async function (id) {
    try {
      const cobro = await cobroRepository.findCobroById(id);
      return cobro;
    } catch (error) {
      console.log(error);
    }
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
      const cuenta = await CuentaPendiente.findByIdAndUpdate(
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
      console.log(error);
    }
    /*finally {
      // End the session
      session.endSession();

      // Close the MongoDB connection
      mongoose.connection.close();
    }*/
  },
  updateCobroById: async function (id, _cobro) {
    try {
      const cobro = await cobroRepository.updateCobroById(id, _cobro);
      return cobro;
    } catch (error) {
      console.log(error);
    }
  },
  deleteCobroById: async function (id) {
    try {
      const cobro = await cobroRepository.deleteCobroById(id);
      return cobro;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = cobroService;
