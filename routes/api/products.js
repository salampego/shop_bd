const express = require("express");
const { getDeliveryList } = require("../../controllers");

const router = express.Router();

router.get("/", getDeliveryList);

module.exports = router;
