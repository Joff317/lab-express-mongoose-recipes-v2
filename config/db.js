const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL_PROD)
  .then((db) => console.log(`Connected to : ${db.connections[0].name}`))
  .catch((err) => console.error("", err));