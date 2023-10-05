const express = require("express");

const connectToDatabase = require("./src/db");
const bodyParser = require("body-parser");

const clienteRouter = require("./src/routes/clienteRouter");
const cobroRouter = require("./src/routes/cobroRouter");
const cuentaPendienteRouter = require("./src/routes/cuentaPendienteRouter");

const app = express();

(async () => {
  try {
    const port = process.env.PORT;

    // Conectar a la base de datos primero
    await connectToDatabase();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/api/v1/clientes", clienteRouter);
    app.use("/api/v1/cobros", cobroRouter);
    app.use("/api/v1/cuentas", cuentaPendienteRouter);

    app.listen(port, () => {
      console.log("API corriendo en puerto " + port);
    });
  } catch (error) {
    throw new Error("Hubo un error al conectarse a MongoDB");
  }
})();
