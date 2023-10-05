const mongoose = require("mongoose");

const CuentaPendiente = require("../model/CuentaPendiente");
const Cobro = require("../model/Cobro");

const cobroRepository = require("../repository/cobroRepository");
const cuentaPendienteRepository = require("../repository/cuentaPendienteRepository");
const clienteRepository = require("../repository/clienteRepository");

const asyncWrapper = require("../utils/asyncWrapper");

const cobroService = {
  /**
   * Encuentra todos los cobros.
   * @function findAll
   * @returns {Promise<Cobro[]>} Una promesa que se resuelve con una lista de cobros.
   */
  findAll: async function (gte, lt) {
    const cobros = await asyncWrapper(cobroRepository.findAll, [
      Number(gte),
      Number(lt),
    ]);
    return cobros;
  },
  /**
   * Encuentra todos los cobros que pertenezcan a un cliente con un nombre especifico.
   * @function findAllByName
   * @param {string} nombre - El nombre del cliente a buscar.
   * @param {string} gte - El minimo monto cobrado.
   * @param {string} lt - El maximo monto cobrado.
   * @returns {Promise<Cobro[]>} Una promesa que se resuelve con una lista de cobros.
   */
  findAllByName: async function (nombre, gte, lt) {
    const cliente = await asyncWrapper(clienteRepository.findFirstByName, [
      nombre,
    ]);
    const cobros = await asyncWrapper(cobroRepository.findAllByClientId, [
      cliente.id,
      Number(gte),
      Number(lt),
    ]);
    return cobros;
  },
  /**
   * Encuentra un cobro por su ID.
   * @function findById
   * @param {string} id - El ID del cobro a buscar.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro encontrado.
   */
  findById: async function (id) {
    const cobro = await asyncWrapper(cobroRepository.findById, [id]);
    return cobro;
  },
  /**
   * Guarda un cobro.
   * @function save
   * @param {Cobro} _cobro - El cobro a guardar.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro guardado.
   */
  save: async function (_cobro) {
    const session = await mongoose.startSession();

    try {
      const { id_cliente, id_cuenta_pendiente, monto_cobrado } = _cobro;

      const cuentaPendiente = await cuentaPendienteRepository.findById(
        id_cuenta_pendiente
      );

      // Si la cuenta pendiente no le pertenece al cliente, o el
      // monto a cobrar es mayor que el monto actual, terminar aqui
      if (
        cuentaPendiente.id_cliente != id_cliente ||
        cuentaPendiente.monto_restante < monto_cobrado ||
        !id_cliente ||
        !id_cuenta_pendiente ||
        monto_cobrado <= 0
      ) {
        const error = new Error("La validacion no fue exitosa");
        error.name = "ValidationError";
        throw error;
      }

      session.startTransaction();

      // Restarle dinero al cliente
      // Recordar manejar error del monto restante en el router...
      await CuentaPendiente.findByIdAndUpdate(
        id_cuenta_pendiente,
        { $inc: { monto_restante: -monto_cobrado } },
        { session }
      );

      // Registrar cobro
      const cobro = await Cobro.create(
        [
          {
            id_cliente: id_cliente,
            id_cuenta_pendiente: id_cuenta_pendiente,
            monto_cobrado: monto_cobrado,
          },
        ],
        { session }
      );

      await session.commitTransaction();
      return cobro;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  },
  /**
   * Actualiza un cobro por su ID.
   * @function updateById
   * @param {string} id - El ID del cobro a actualizar.
   * @param {Cobro} _cobro - El cobro actualizado.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro actualizado.
   */
  updateById: async function (id, _cobro) {
    const cobro = await asyncWrapper(cobroRepository.updateById, [id, _cobro]);
    return cobro;
  },
  /**
   * Elimina un cobro por su ID.
   * @function deleteById
   * @param {string} id - El ID del cobro a eliminar.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro eliminado.
   */
  deleteById: async function (id) {
    const cobro = await asyncWrapper(cobroRepository.deleteById, [id]);
    return cobro;
  },
};

module.exports = cobroService;
