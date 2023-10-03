const mongoose = require("mongoose");

async function connect() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connect;
