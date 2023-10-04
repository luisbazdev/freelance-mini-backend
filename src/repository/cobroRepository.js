const Cobro = require("../model/Cobro");

const cobroRepository = {
  findAllCobros: async function () {
    try {
      const cobros = await Cobro.find({});
      return cobros;
    } catch (error) {
      throw error;
    }
  },
  findCobroById: async function (id) {
    try {
      const cobro = await Cobro.findById(id);
      return cobro;
    } catch (error) {
      throw error;
    }
  },
  saveCobro: async function (_cobro) {
    try {
      const cobro = await Cobro.create(_cobro);
      return cobro;
    } catch (error) {
      throw error;
    }
  },
  updateCobroById: async function (id, _cobro) {
    try {
      const cobro = await Cobro.findByIdAndUpdate(id, _cobro);
      return cobro;
    } catch (error) {
      throw error;
    }
  },
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