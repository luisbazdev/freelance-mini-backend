const cobroService = require('../service/cobroService');

const cobroController = {
  findAllCobros: async function () {
    try {
      const cobros = await cobroService.findAllCobros();
      return cobros;
    } catch (error) {
      console.log("error");
    }
  },
  findCobroById: async function (id) {
    try {
      const cobro = await cobroService.findCobroById(id);
      return cobro;
    } catch (error) {
      console.log(error);
    }
  },
  saveCobro: async function (_cobro) {
    try {
      const cobro = await cobroService.saveCobro(_cobro);
      return cobro;
    } catch (error) {
      console.log(error);
    }
  },
  updateCobroById: async function (id, _cobro) {
    try {
      const cobro = await cobroService.updateCobroById(id, _cobro);
      return cobro;
    } catch (error) {
      console.log(error);
    }
  },
  deleteCobroById: async function (id) {
    try {
      const cobro = await cobroService.deleteCobroById(id);
      return cobro;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = cobroController;