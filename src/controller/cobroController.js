const cobroService = require("../service/cobroService");
const asyncWrapper = require("../utils/asyncWrapper");

const cobroController = {
  /**
   * Encuentra todos los cobros.
   * @param {string} nombre - El nombre del cliente.
   * @param {string} gte - El minimo monto cobrado.
   * @param {string} lt - El maximo monto cobrado.
   * @function findAllCobros
   * @returns {Promise<Cobro[]>} Una promesa que se resuelve con una lista de cobros.
   */
  findAllCobros: async function (nombre, gte, lt) {
    let cobros;

    if (nombre) {
      cobros = await asyncWrapper(cobroService.findAllCobrosByName, [
        nombre,
        gte,
        lt,
      ]);
      return cobros;
    }

    cobros = await asyncWrapper(cobroService.findAllCobros, [gte, lt]);
    return cobros;
  },
  /**
   * Encuentra un cobro por su ID.
   * @function findCobroById
   * @param {string} id - El ID del cobro a buscar.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro encontrado.
   */
  findCobroById: async function (id) {
    const cobro = await asyncWrapper(cobroService.findCobroById, [id]);
    return cobro;
  },
  /**
   * Guarda un cobro.
   * @function saveCobro
   * @param {Cobro} _cobro - El cobro a guardar.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro guardado.
   */
  saveCobro: async function (_cobro) {
    const cobro = await asyncWrapper(cobroService.saveCobro, [_cobro]);
    return cobro;
  },
  /**
   * Actualiza un cobro por su ID.
   * @function updateCobroById
   * @param {string} id - El ID del cobro a actualizar.
   * @param {Cobro} _cobro - El cobro actualizado.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro actualizado.
   */
  updateCobroById: async function (id, _cobro) {
    const cobro = await asyncWrapper(cobroService.updateCobroById, [
      id,
      _cobro,
    ]);
    return cobro;
  },
  /**
   * Elimina un cobro por su ID.
   * @function deleteCobroById
   * @param {string} id - El ID del cobro a eliminar.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro eliminado.
   */
  deleteCobroById: async function (id) {
    const cobro = await asyncWrapper(cobroService.deleteCobroById, [id]);
    return cobro;
  },
};

module.exports = cobroController;
