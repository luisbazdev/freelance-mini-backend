const clienteController = require("../controller/clienteController");

const express = require("express");

const clienteRouter = express.Router();

clienteRouter.get("/", async (request, response) => {
  try {
    const clientes = await clienteController.findAllClients();
    return response.status(200).json({ clientes });
  } catch (error) {
    return response.status(500).end();
  }
});

// this method should work for multiple client id(s)
clienteRouter.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cliente = await clienteController.findClientById(id);
    return response.status(200).json({ cliente });
  } catch (error) {
    return response.status(500).end();
  }
});

clienteRouter.post("/", async (request, response) => {
  try {
    const { name, avatar, no_cliente } = request.body;
    const cliente = await clienteController.saveClient({
      name,
      avatar,
      no_cliente,
    });
    return response.status(201).json({ cliente });
  } catch (error) {
    return response.status(500).end();
  }
});

clienteRouter.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cliente = await clienteController.updateClientById(id);
    return response.status(200).json({ cliente });
  } catch (error) {
    return response.status(500).end();
  }
});

clienteRouter.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cliente = await clienteController.deleteClientById(id);
    return response.status(200).json({ cliente });
  } catch (error) {
    return response.status(500).end();
  }
});

module.exports = clienteRouter;
