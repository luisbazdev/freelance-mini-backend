const cuentaPendienteController = require("../controller/cuentaPendienteController");

const express = require("express");
const asyncWrapper = require("../utils/asyncWrapper");

const cuentaPendienteRouter = express.Router();
/**
 * Ruta para obtener todas las cuentas pendientes.
 * @name GET /cuentas
 * @function
 * @param {Object} request - El objeto de solicitud HTTP.
 * @param {Object} response - El objeto de respuesta HTTP.
 * @returns {CuentaPendiente[]} La respuesta HTTP que contiene la lista de cuentas pendientes.
 * @throws {Error} Si ocurre un error al obtener las cuentas pendientes.
 */
cuentaPendienteRouter.get("/", async (request, response) => {
  try {
    const { nombre, gte, lt } = request.query;
    const cuentaPendientes = await asyncWrapper(
      cuentaPendienteController.findAll,
      [nombre, gte, lt]
    );
    return response.status(200).json({ cuentaPendientes });
  } catch (error) {
    return response.status(500).end();
  }
});
/**
 * Ruta para obtener una cuenta pendiente por su ID.
 * @name GET /cuentas/:id
 * @function
 * @param {Object} request - El objeto de solicitud HTTP.
 * @param {Object} response - El objeto de respuesta HTTP.
 * @returns {CuentaPendiente} La respuesta HTTP que contiene la cuenta pendiente con el ID especificado.
 * @throws {CastError} Si el ID proporcionado no es valido.
 * @throws {Error} Si ocurre un error al obtener la cuenta pendiente.
 */
cuentaPendienteRouter.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteController.findById,
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
/**
 * Ruta para crear una cuenta pendiente.
 * @name POST /cuentas
 * @function
 * @param {Object} request - El objeto de solicitud HTTP.
 * @param {Object} response - El objeto de respuesta HTTP.
 * @returns {CuentaPendiente} La respuesta HTTP que contiene la cuenta pendiente creada.
 * @throws {ValidationError} Si los campos de la cuenta pendiente proporcionada no son validos.
 * @throws {Error} Si ocurre un error al crear la cuenta pendiente.
 */
cuentaPendienteRouter.post("/", async (request, response) => {
  try {
    const { id_cliente, monto_restante } = request.body;
    const cuentaPendiente = await asyncWrapper(cuentaPendienteController.save, [
      { id_cliente, monto_restante },
    ]);
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
/**
 * Ruta para actualizar una cuenta pendiente por su ID.
 * @name PUT /cuentas/:id
 * @function
 * @param {Object} request - El objeto de solicitud HTTP.
 * @param {Object} response - El objeto de respuesta HTTP.
 * @returns {CuentaPendiente} La respuesta HTTP que contiene la cuenta pendiente actualizada.
 * @throws {CastError} Si el ID proporcionado no es valido.
 * @throws {Error} Si ocurre un error al actualizar la cuenta pendiente.
 */
cuentaPendienteRouter.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { monto_restante } = request.body;
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteController.updateById,
      [id, { monto_restante }]
    );
    return response.status(200).json({ cuentaPendiente });
  } catch (error) {
    switch (error.name) {
      case "ValidationError":
        return response.status(400).end();

      case "CastError":
        return response.status(400).end();

      default:
        return response.status(500).end();
    }
  }
});
/**
 * Ruta para eliminar una cuenta pendiente por su ID.
 * @name DELETE /cuentas/:id
 * @function
 * @param {Object} request - El objeto de solicitud HTTP.
 * @param {Object} response - El objeto de respuesta HTTP.
 * @returns {CuentaPendiente} La respuesta HTTP que contiene la cuenta pendiente eliminada.
 * @throws {CastError} Si el ID proporcionado no es valido.
 * @throws {Error} Si ocurre un error al actualizar la cuenta pendiente.
 */
cuentaPendienteRouter.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cuentaPendiente = await asyncWrapper(
      cuentaPendienteController.deleteById,
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
