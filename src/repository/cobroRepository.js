const Cobro = require("../model/Cobro");
const createQueryObject = require("../utils/query");

const cobroRepository = {
  /**
   * Encuentra todos los cobros.
   * @function findAllCobros
   * @returns {Promise<Cobro[]>} Una promesa que se resuelve con una lista de cobros.
   * @throws {Error} Si ocurre un error al obtener los de cobros.
   */
  findAllCobros: async function (gte, lt) {
    try {
      let query = {};
      query = createQueryObject(query, gte, lt);

      const cobros = await Cobro.find(query);
      return cobros;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Encuentra todos los cobros que pertenezcan a un cliente con un ID especifico.
   * @function findAllCobrosByClientId
   * @param {string} id - El ID del cliente.
   * @param {number} gte - El ID del cliente.
   * @param {number} lt - El ID del cliente.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro encontrado.
   * @throws {Error} Si ocurre un error al buscar el cobro.
   */
  findAllCobrosByClientId: async function (clientId, gte, lt) {
    try {
      let query = { id_cobro: clientId };
      query = createQueryObject(query, gte, lt);

      const cobros = await Cobro.find(query);
      return cobros;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Encuentra un cobro por su ID.
   * @function findCobroById
   * @param {string} id - El ID del cobro a buscar.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro encontrado.
   * @throws {Error} Si ocurre un error al buscar el cobro.
   */
  findCobroById: async function (id) {
    try {
      const cobro = await Cobro.findById(id);
      return cobro;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Guarda un cobro.
   * @function saveCobro
   * @param {Cobro} _cobro - El cobro a guardar.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro guardado.
   * @throws {Error} Si ocurre un error al guardar el cobro.
   */
  saveCobro: async function (_cobro) {
    try {
      const cobro = await Cobro.create(_cobro);
      return cobro;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Actualiza un cobro por su ID.
   * @function updateCobroById
   * @param {string} id - El ID del cobro a actualizar.
   * @param {Cobro} _cobro - El cobro actualizado.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro actualizado.
   * @throws {Error} Si ocurre un error al actualizar el cobro.
   */
  updateCobroById: async function (id, _cobro) {
    try {
      const cobro = await Cobro.findByIdAndUpdate(id, _cobro);
      return cobro;
    } catch (error) {
      throw error;
    }
  },
  /**
   * Elimina un cobro por su ID.
   * @function deleteCobroById
   * @param {string} id - El ID del cobro a eliminar.
   * @returns {Promise<Cobro>} Una promesa que se resuelve con el cobro eliminado.
   * @throws {Error} Si ocurre un error al eliminar el cobro.
   */
  deleteCobroById: async function (id) {
    try {
      const cobro = await Cobro.findByIdAndRemove(id);
      return cobro;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = cobroRepository;
