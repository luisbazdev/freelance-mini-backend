const cuentaPendienteController = require("../controller/cuentaPendienteController");

const express = require("express");
const asyncWrapper = require("../utils/asyncWrapper");

const cuentaPendienteRouter = express.Router();

cuentaPendienteRouter.get("/", async (request, response) => {
  try {
    const { nombre, gte, lt } = request.query;
    const cuentaPendientes = await asyncWrapper(
      cuentaPendienteController.findAllCuentaPendientes,
      [nombre, gte, lt]
    );
    return response.status(200).json({ cuentaPendientes });
  } catch (error) {
    return response.status(500).end();
  }
});

// work on a method to fetch by client id

cuentaPendienteRouter.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteController.findCuentaPendienteById,
      [id]
    );
    return response.status(200).json({ cuentaPendiente });
  } catch (error) {
    switch (error.name) {
      case "CastError":
        return response.status(400).end();

      default:
        return response.status(500).end();
    }
  }
});

cuentaPendienteRouter.post("/", async (request, response) => {
  try {
    const { id_cliente, monto_restante } = request.body;
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteController.saveCuentaPendiente,
      [id_cliente, monto_restante]
    );
    return response.status(201).json({ cuentaPendiente });
  } catch (error) {
    switch (error.name) {
      case "ValidationError":
        return response.status(400).end();

      default:
        return response.status(500).end();
    }
  }
});

cuentaPendienteRouter.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteController.updateCuentaPendienteById,
      [id]
    );
    return response.status(200).json({ cuentaPendiente });
  } catch (error) {
    switch (error.name) {
      case "CastError":
        return response.status(400).end();

      default:
        return response.status(500).end();
    }
  }
});

cuentaPendienteRouter.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteController.deleteCuentaPendienteById,
      [id]
    );
    return response.status(200).json({ cuentaPendiente });
  } catch (error) {
    switch (error.name) {
      case "CastError":
        return response.status(400).end();

      default:
        return response.status(500).end();
    }
  }
});

module.exports = cuentaPendienteRouter;
