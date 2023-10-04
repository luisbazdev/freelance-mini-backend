const cobroController = require("../controller/cobroController");

const express = require("express");
const asyncWrapper = require("../utils/asyncWrapper");

const cobroRouter = express.Router();

cobroRouter.get("/", async (request, response) => {
  try {
    const cobros = await asyncWrapper(cobroController.findAllCobros);
    return response.status(200).json({ cobros });
  } catch (error) {
    return response.status(500).end();
  }
});

cobroRouter.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cobro = await asyncWrapper(cobroController.findCobroById, [id]);
    return response.status(200).json({ cobro });
  } catch (error) {
    switch (error.name) {
      case "CastError":
        return response.status(400).end();

      default:
        return response.status(500).end();
    }
  }
});

cobroRouter.post("/", async (request, response) => {
  try {
    const { id_cliente, id_cuenta_pendiente, monto_cobrado } = request.body;
    const cobro_body = {
      id_cliente,
      id_cuenta_pendiente,
      monto_cobrado,
    };
    const cobro = await asyncWrapper(cobroController.saveCobro, [cobro_body]);
    return response.status(201).json({ cobro });
  } catch (error) {
    switch (error.name) {
      case "ValidationError":
        return response.status(400).end();

      default:
        return response.status(500).end();
    }
  }
});

cobroRouter.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cobro = await asyncWrapper(cobroController.updateCobroById, [id]);
    return response.status(200).json({ cobro });
  } catch (error) {
    switch (error.name) {
      case "CastError":
        return response.status(400).end();

      default:
        return response.status(500).end();
    }
  }
});

cobroRouter.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cobro = await asyncWrapper(cobroController.deleteCobroById, [id]);
    return response.status(200).json({ cobro });
  } catch (error) {
    switch (error.name) {
      case "CastError":
        return response.status(400).end();

      default:
        return response.status(500).end();
    }
  }
});

module.exports = cobroRouter;
