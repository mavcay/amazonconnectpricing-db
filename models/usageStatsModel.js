const pool = require("../db");

const getAllUsageStats = async () => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM UsageStats");
        return rows;
    } finally {
        if (conn) conn.release();
    }
};

const addUsageStat = async ({ daily_use, business_days, monthly_calls, avg_handle_time, call_minutes }) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const result = await conn.query(
            "INSERT INTO UsageStats (daily_use, business_days, monthly_calls, avg_handle_time, call_minutes) VALUES (?, ?, ?, ?, ?)",
            [daily_use, business_days, monthly_calls, avg_handle_time, call_minutes]
        );
        return { id: result.insertId };
    } finally {
        if (conn) conn.release();
    }
};

const deleteUsageStatById = async (id) => {
    let conn;
    try {
        conn = await pool.getConnection();
        await conn.query("DELETE FROM UsageStats WHERE id = ?", [id]);
        return { message: "UsageStat deleted successfully" };
    } finally {
        if (conn) conn.release();
    }
};

module.exports = { getAllUsageStats, addUsageStat, deleteUsageStatById };
