const cobroController = require("../controller/cobroController");

const express = require("express");

const cobroRouter = express.Router();

cobroRouter.get("/", async (request, response) => {
  try {
    const cobros = await cobroController.findAllCobros();
    return response.status(200).json({ cobros });
  } catch (error) {
    return response.status(500).end();
  }
});

cobroRouter.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cobro = await cobroController.findCobroById(id);
    return response.status(200).json({ cobro });
  } catch (error) {
    return response.status(500).end();
  }
});

cobroRouter.post("/", async (request, response) => {
  try {
    const { id_cliente, id_cuenta_pendiente, monto_cobrado } = request.body;
    const cobro = await cobroController.saveCobro({
      id_cliente,
      id_cuenta_pendiente,
      monto_cobrado,
    });
    return response.status(201).json({ cobro });
  } catch (error) {
    return response.status(500).end();
  }
});

cobroRouter.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cobro = await cobroController.updateCobroById(id);
    return response.status(200).json({ cobro });
  } catch (error) {
    return response.status(500).end();
  }
});

cobroRouter.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cobro = await cobroController.deleteCobroById(id);
    return response.status(200).json({ cobro });
  } catch (error) {
    return response.status(500).end();
  }
});

module.exports = cobroRouter;