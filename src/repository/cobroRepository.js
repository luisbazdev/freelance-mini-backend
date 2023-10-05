const Cobro = require("../model/Cobro");
const createQueryObject = require("../utils/query");

const cobroRepository = {
  /**
   * Encuentra todos los cobros.
   * @function findAll
   * @returns {Promise<Cobro[]>} Una promesa que se resuelve con una lista de cobros.
   * @throws {Error} Si ocurre un error al obtener los de cobros.
   */
  findAll: async function (gte, lt) {
    try {
      let query = {};
      query = createQueryObject(query, gte, lt, "monto_cobrado");

      const cobros = await Cobro.find(query);
      return cobros;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Encuentra todos los cobros que pertenezcan a un cliente con un ID especifico.
   * @function findAllByClientId
   * @param {string} id - El ID del cliente.
   * @param {number} gte - El ID del cliente.
   * @param {number} lt - El ID del cliente.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro encontrado.
   * @throws {Error} Si ocurre un error al buscar el cobro.
   */
  findAllByClientId: async function (clientId, gte, lt) {
    try {
      let query = { id_cliente: clientId };
      query = createQueryObject(query, gte, lt, "monto_cobrado");

      const cobros = await Cobro.find(query);
      return cobros;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Encuentra un cobro por su ID.
   * @function findById
   * @param {string} id - El ID del cobro a buscar.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro encontrado.
   * @throws {Error} Si ocurre un error al buscar el cobro.
   */
  findById: async function (id) {
    try {
      const cobro = await Cobro.findById(id);
      return cobro;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Guarda un cobro.
   * @function save
   * @param {Cobro} _cobro - El cobro a guardar.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro guardado.
   * @throws {Error} Si ocurre un error al guardar el cobro.
   */
  save: async function (_cobro) {
    try {
      const cobro = await Cobro.create(_cobro);
      return cobro;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Actualiza un cobro por su ID.
   * @function updateById
   * @param {string} id - El ID del cobro a actualizar.
   * @param {Cobro} _cobro - El cobro actualizado.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro actualizado.
   * @throws {Error} Si ocurre un error al actualizar el cobro.
   */
  updateById: async function (id, _cobro) {
    try {
      const cobro = await Cobro.findByIdAndUpdate(id, _cobro, {
        returnDocument: "after",
      });
      return cobro;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Elimina un cobro por su ID.
   * @function deleteById
   * @param {string} id - El ID del cobro a eliminar.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro eliminado.
   * @throws {Error} Si ocurre un error al eliminar el cobro.
   */
  deleteById: async function (id) {
    try {
      const cobro = await Cobro.findById(id);
      await Cobro.deleteOne({ _id: cobro.id });
      return cobro;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = cobroRepository;
