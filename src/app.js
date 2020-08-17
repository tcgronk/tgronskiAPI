const express = require("express");
const deliveriesRouter= require("./deliveries-router")
const app = express();

app.use(express.json());
app.use("/v1/customers", deliveriesRouter);

module.exports = app;