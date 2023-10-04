const clienteController = require("../controller/clienteController");

const express = require("express");
const asyncWrapper = require("../utils/asyncWrapper");

const clienteRouter = express.Router();
/**
 * Ruta para obtener todos los clientes.
 * @name GET /clientes
 * @function
 * @param {Object} request - El objeto de solicitud HTTP.
 * @param {Object} response - El objeto de respuesta HTTP.
 * @returns {Cliente[]} La respuesta HTTP que contiene la lista de clientes.
 * @throws {Error} Si ocurre un error al obtener los clientes.
 */
clienteRouter.get("/", async (request, response) => {
  try {
    const clientes = await asyncWrapper(clienteController.findAllClients);
    return response.status(200).json({ clientes });
  } catch (error) {
    return response.status(500).end();
  }
});
/**
 * Ruta para obtener un cliente por su ID.
 * @name GET /clientes/:id
 * @function
 * @param {Object} request - El objeto de solicitud HTTP.
 * @param {Object} response - El objeto de respuesta HTTP.
 * @returns {Cliente} La respuesta HTTP que contiene el cliente con el ID especificado.
 * @throws {CastError} Si el ID proporcionado no es valido.
 * @throws {Error} Si ocurre un error al obtener el cliente.
 */
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
/**
 * Ruta para crear un nuevo cliente.
 * @name POST /clientes
 * @function
 * @param {Object} request - El objeto de solicitud HTTP.
 * @param {Object} response - El objeto de respuesta HTTP.
 * @returns {Cliente} La respuesta HTTP que contiene el cliente creado.
 * @throws {ValidationError} Si los campos del cliente proporcionado no son validos.
 * @throws {Error} Si ocurre un error al crear el cliente.
 */
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
/**
 * Ruta para actualizar un cliente por su ID.
 * @name PUT /clientes/:id
 * @function
 * @param {Object} request - El objeto de solicitud HTTP.
 * @param {Object} response - El objeto de respuesta HTTP.
 * @returns {Cliente} La respuesta HTTP que contiene el cliente actualizado.
 * @throws {CastError} Si el ID proporcionado no es valido.
 * @throws {Error} Si ocurre un error al actualizar el cliente.
 */
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
/**
 * Ruta para eliminar un cliente por su ID.
 * @name DELETE /clientes/:id
 * @function
 * @param {Object} request - El objeto de solicitud HTTP.
 * @param {Object} response - El objeto de respuesta HTTP.
 * @returns {Cliente} La respuesta HTTP que contiene el cliente eliminado.
 * @throws {CastError} Si el ID proporcionado no es valido.
 * @throws {Error} Si ocurre un error al actualizar el cliente.
 */
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
