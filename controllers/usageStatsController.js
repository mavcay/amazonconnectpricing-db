const usageStatsModel = require("../models/usageStatsModel");

const getUsageStats = async (req, res) => {
    try {
        const stats = await usageStatsModel.getAllUsageStats();
        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addUsageStat = async (req, res) => {
    const { daily_use, business_days, monthly_calls, avg_handle_time, call_minutes } = req.body;
    try {
        const result = await usageStatsModel.addUsageStat({ daily_use, business_days, monthly_calls, avg_handle_time, call_minutes });
        res.json({ message: "UsageStat added successfully", id: result.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUsageStat = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await usageStatsModel.deleteUsageStatById(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getUsageStats, addUsageStat, deleteUsageStat };
