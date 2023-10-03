require("./src/db");

const express = require("express");
const clienteRouter = require("./src/routes/clienteRouter");
const cobroRouter = require("./src/routes/cobroRouter");
const cuentaPendienteRouter = require("./src/routes/cuentaPendienteRouter");

const connectToDatabase = require("./src/db");
const bodyParser = require("body-parser");

const app = express();

const Cliente = require("./src/model/Cliente");
const Cobro = require("./src/model/Cobro");
const CuentaPendiente = require("./src/model/CuentaPendiente");

(async () => {
  try {
    const port = process.env.PORT;

    await connectToDatabase();
    
    //await Cliente.deleteMany({})
    //await Cobro.deleteMany({})
    //await CuentaPendiente.deleteMany({})

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
