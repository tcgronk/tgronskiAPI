const express = require("express");
const knex = require("knex");
const deliveriesRouter = express.Router();
const DeliveriesService = require("./deliveries-service");

deliveriesRouter.route("/:id/delivery").post((req, res, next) => {
  const { order_quote_id, order_status, order_complete, order_kind } = req.body;
  const newOrder = {
    order_quote_id,
    order_status,
    order_complete,
    order_kind,
  };
  for (const [key, value] of Object.entries(newOrder)) {
    if (value == null) {
      return res.status(400).json({
        error: { message: "The parameters of your request were invalid." },
      });
    }
  }
  newOrder.id = req.id;
  DeliveriesService.insertOrder(req.app.get("db"), newOrder)
    .then((order) => {
      res.status(201).json(order);
    })
    .catch(next);
});
module.exports = deliveriesRouter;
