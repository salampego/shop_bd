const express = require("express");
const { getDeliveryList, getProductById } = require("../../controllers");
const asyncWrapper = require("../../helpers/asyncWrapper");

const router = express.Router();

router.get("/", asyncWrapper(getDeliveryList));
router.get("/:restrauntId", asyncWrapper(getProductById));
module.exports = router;
