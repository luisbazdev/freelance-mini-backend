const cobroService = require("../service/cobroService");
const asyncWrapper = require("../utils/asyncWrapper");

const cobroController = {
  findAllCobros: async function () {
    const cobros = await asyncWrapper(cobroService.findAllCobros);
    return cobros;
  },
  findCobroById: async function (id) {
    const cobro = await asyncWrapper(cobroService.findCobroById, [id]);
    return cobro;
  },
  saveCobro: async function (_cobro) {
    const cobro = await asyncWrapper(cobroService.saveCobro, [_cobro]);
    return cobro;
  },
  updateCobroById: async function (id, _cobro) {
    const cobro = await asyncWrapper(cobroService.updateCobroById, [
      id,
      _cobro,
    ]);
    return cobro;
  },
  deleteCobroById: async function (id) {
    const cobro = await asyncWrapper(cobroService.deleteCobroById, [id]);
    return cobro;
  },
};

module.exports = cobroController;
