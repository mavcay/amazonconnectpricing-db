const express = require("express");
const router = express.Router();
const { getCallTypes, addCallType, deleteCallType } = require("../controllers/callTypeController");

router.get("/", getCallTypes);
router.post("/", addCallType);
router.delete("/:id", deleteCallType);

module.exports = router;
