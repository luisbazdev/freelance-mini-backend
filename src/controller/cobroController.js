const cobroService = require("../service/cobroService");
const asyncWrapper = require("../utils/asyncWrapper");

const cobroController = {
  /**
   * Encuentra todos los cobros.
   * @param {string} nombre - El nombre del cliente.
   * @param {string} gte - El minimo monto cobrado.
   * @param {string} lt - El maximo monto cobrado.
   * @function findAll
   * @returns {Promise<Cobro[]>} Una promesa que se resuelve con una lista de cobros.
   */
  findAll: async function (nombre, gte, lt) {
    let cobros;

    if (nombre) {
      cobros = await asyncWrapper(cobroService.findAllByName, [
        nombre,
        gte,
        lt,
      ]);
      return cobros;
    }

    cobros = await asyncWrapper(cobroService.findAll, [gte, lt]);
    return cobros;
  },
  /**
   * Encuentra un cobro por su ID.
   * @function findById
   * @param {string} id - El ID del cobro a buscar.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro encontrado.
   */
  findById: async function (id) {
    const cobro = await asyncWrapper(cobroService.findById, [id]);
    return cobro;
  },
  /**
   * Guarda un cobro.
   * @function save
   * @param {Cobro} _cobro - El cobro a guardar.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro guardado.
   */
  save: async function (_cobro) {
    const cobro = await asyncWrapper(cobroService.save, [_cobro]);
    return cobro;
  },
  /**
   * Actualiza un cobro por su ID.
   * @function updateById
   * @param {string} id - El ID del cobro a actualizar.
   * @param {Cobro} _cobro - El cobro actualizado.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro actualizado.
   */
  updateById: async function (id, _cobro) {
    const cobro = await asyncWrapper(cobroService.updateById, [
      id,
      _cobro,
    ]);
    return cobro;
  },
  /**
   * Elimina un cobro por su ID.
   * @function deleteById
   * @param {string} id - El ID del cobro a eliminar.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro eliminado.
   */
  deleteById: async function (id) {
    const cobro = await asyncWrapper(cobroService.deleteById, [id]);
    return cobro;
  },
};

module.exports = cobroController;
