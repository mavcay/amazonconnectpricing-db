const express = require("express");
const router = express.Router();
const { getCharges, addCharge, deleteCharge } = require("../controllers/chargesController");

router.get("/", getCharges);
router.post("/", addCharge);
router.delete("/:id", deleteCharge);

module.exports = router;
