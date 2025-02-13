const express = require("express");
const router = express.Router();
const { getConnectCharges, addConnectCharge, deleteConnectCharge } = require("../controllers/connectChargeController");

router.get("/", getConnectCharges);
router.post("/", addConnectCharge);
router.delete("/:id", deleteConnectCharge);

module.exports = router;
