const express = require("express");
const asyncWrapper = require("../../helpers/asyncWrapper");
const { createOrder, findOrder } = require("../../controllers");
const { validation } = require("../../middlewares/validation");
const {
  orderSchema,
  searchOrderSchema,
} = require("../../middlewares/validationSchema");

const router = express.Router();

router.post("/", validation(orderSchema), asyncWrapper(createOrder));
router.post(
  "/findOrder",
  validation(searchOrderSchema),
  asyncWrapper(findOrder)
);
module.exports = router;
