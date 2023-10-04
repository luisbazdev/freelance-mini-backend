const clienteController = require("../controller/clienteController");

const express = require("express");
const asyncWrapper = require("../utils/asyncWrapper");

const clienteRouter = express.Router();

clienteRouter.get("/", async (request, response) => {
  try {
    const clientes = await asyncWrapper(clienteController.findAllClients);
    return response.status(200).json({ clientes });
  } catch (error) {
    return response.status(500).end();
  }
});

// this method should work for multiple client id(s)
clienteRouter.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cliente = await asyncWrapper(clienteController.findClientById, [id]);
    return response.status(200).json({ cliente });
  } catch (error) {
    switch (error.name) {
      case "CastError":
        return response.status(400).end();

      default:
        return response.status(500).end();
    }
  }
});

clienteRouter.post("/", async (request, response) => {
  try {
    const { name, avatar, no_cliente } = request.body;
    const cliente_body = {
      name,
      avatar,
      no_cliente,
    };
    const cliente = await asyncWrapper(clienteController.saveClient, [
      cliente_body,
    ]);
    return response.status(201).json({ cliente });
  } catch (error) {
    switch (error.name) {
      case "ValidationError":
        return response.status(400).end();

      default:
        return response.status(500).end();
    }
  }
});

clienteRouter.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cliente = await asyncWrapper(clienteController.updateClientById, [
      id,
    ]);
    return response.status(200).json({ cliente });
  } catch (error) {
    switch (error.name) {
      case "CastError":
        return response.status(400).end();

      default:
        return response.status(500).end();
    }
  }
});

clienteRouter.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cliente = await asyncWrapper(clienteController.deleteClientById, [
      id,
    ]);
    return response.status(200).json({ cliente });
  } catch (error) {
    switch (error.name) {
      case "CastError":
        return response.status(400).end();

      default:
        return response.status(500).end();
    }
  }
});

module.exports = clienteRouter;
