const cobroController = require("../controller/cobroController");

const express = require("express");
const asyncWrapper = require("../utils/asyncWrapper");

const cobroRouter = express.Router();
/**
 * Ruta para obtener todos los cobros.
 * @name GET /cobros
 * @function
 * @param {Object} request - El objeto de solicitud HTTP.
 * @param {Object} response - El objeto de respuesta HTTP.
 * @returns {Cobro[]} La respuesta HTTP que contiene la lista de cobros.
 * @throws {Error} Si ocurre un error al obtener los cobros.
 */
cobroRouter.get("/", async (request, response) => {
  try {
    const { nombre, gte, lt } = request.query;
    const cobros = await asyncWrapper(cobroController.findAll, [
      nombre,
      gte,
      lt,
    ]);
    return response.status(200).json({ cobros });
  } catch (error) {
    switch (error.name) {
      case "TypeError":
        return response.status(400).end();

      default:
        return response.status(500).end();
    }
  }
});
/**
 * Ruta para obtener un cobro por su ID.
 * @name GET /cobros/:id
 * @function
 * @param {Object} request - El objeto de solicitud HTTP.
 * @param {Object} response - El objeto de respuesta HTTP.
 * @returns {Cobro} La respuesta HTTP que contiene el cobro con el ID especificado.
 * @throws {CastError} Si el ID proporcionado no es valido.
 * @throws {Error} Si ocurre un error al obtener el cobro.
 */
cobroRouter.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cobro = await asyncWrapper(cobroController.findById, [id]);
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
/**
 * Ruta para crear un cobro.
 * @name POST /cobros
 * @function
 * @param {Object} request - El objeto de solicitud HTTP.
 * @param {Object} response - El objeto de respuesta HTTP.
 * @returns {Cobro} La respuesta HTTP que contiene el cobro creado.
 * @throws {ValidationError} Si los campos del cobro proporcionado no son validos.
 * @throws {Error} Si ocurre un error al crear el cobro.
 */
cobroRouter.post("/", async (request, response) => {
  try {
    const { id_cliente, id_cuenta_pendiente, monto_cobrado } = request.body;
    const cobro_body = {
      id_cliente,
      id_cuenta_pendiente,
      monto_cobrado,
    };
    const cobro = await asyncWrapper(cobroController.save, [cobro_body]);
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
/**
 * Ruta para actualizar un cobro por su ID.
 * @name PUT /cobros/:id
 * @function
 * @param {Object} request - El objeto de solicitud HTTP.
 * @param {Object} response - El objeto de respuesta HTTP.
 * @returns {Cobro} La respuesta HTTP que contiene el cobro actualizado.
 * @throws {CastError} Si el ID proporcionado no es valido.
 * @throws {Error} Si ocurre un error al actualizar el cobro.
 */
cobroRouter.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const _cobro = {
      monto_cobrado: request.body.monto_cobrado,
    };
    const cobro = await asyncWrapper(cobroController.updateById, [id, _cobro]);
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
/**
 * Ruta para eliminar un cobro por su ID.
 * @name DELETE /cobros/:id
 * @function
 * @param {Object} request - El objeto de solicitud HTTP.
 * @param {Object} response - El objeto de respuesta HTTP.
 * @returns {Cobro} La respuesta HTTP que contiene el cobro eliminado.
 * @throws {CastError} Si el ID proporcionado no es valido.
 * @throws {Error} Si ocurre un error al actualizar el cobro.
 */
cobroRouter.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const cobro = await asyncWrapper(cobroController.deleteById, [id]);
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
