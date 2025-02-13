const express = require("express");
const router = express.Router();
const { getUsageStats, addUsageStat, deleteUsageStat } = require("../controllers/usageStatsController");

router.get("/", getUsageStats);
router.post("/", addUsageStat);
router.delete("/:id", deleteUsageStat);

module.exports = router;
