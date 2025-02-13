const express = require("express");
const router = express.Router();
const { getPhoneTypes, addPhoneType, deletePhoneType } = require("../controllers/phoneTypeController");

router.get("/", getPhoneTypes);
router.post("/", addPhoneType);
router.delete("/:id", deletePhoneType);

module.exports = router;
