const express = require("express");
const app = express.Router();


app.use("/", require("./user.pages.routes"));



// export the router
module.exports = app;