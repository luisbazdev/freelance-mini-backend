const cobroRepository = require("../repository/cobroRepository");

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
  saveCobro: async function (_client) {
    try {
      const cobro = await cobroRepository.saveCobro(_client);
      return cobro;
    } catch (error) {
      console.log(error);
    }
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