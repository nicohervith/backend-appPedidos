const mongoose = require("mongoose");

const MONGO_URL = "mongodb://localhost/shoppingCart";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB funcionando"))
    .catch((error) => console.error(error));
};

module.exports = db;
