const pool = require("../db");

const getAllCharges = async () => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query(`
            SELECT 
                Charges.id, 
                Regions.region_name, Regions.sub_region, 
                Country.country_name, 
                ConnectCharge.charge_type, ConnectCharge.charge_rate, 
                CallType.call_type, 
                PhoneType.phone_type, 
                UsageStats.daily_use, UsageStats.business_days, 
                UsageStats.monthly_calls, UsageStats.avg_handle_time, UsageStats.call_minutes, 
                Charges.total_cost 
            FROM Charges
            JOIN Regions ON Charges.region_id = Regions.id
            JOIN Country ON Charges.country_id = Country.id
            JOIN ConnectCharge ON Charges.connect_charge_id = ConnectCharge.id
            JOIN CallType ON Charges.call_type_id = CallType.id
            JOIN PhoneType ON Charges.phone_type_id = PhoneType.id
            JOIN UsageStats ON Charges.usage_id = UsageStats.id
        `);
        return rows;
    } finally {
        if (conn) conn.release();
    }
};

const addCharge = async ({ region_id, country_id, connect_charge_id, call_type_id, phone_type_id, usage_id }) => {
    let conn;
    try {
        conn = await pool.getConnection();

        // Fetch charge rate
        const [{ charge_rate }] = await conn.query("SELECT charge_rate FROM ConnectCharge WHERE id = ?", [connect_charge_id]);

        // Fetch usage data
        const [{ call_minutes }] = await conn.query("SELECT call_minutes FROM UsageStats WHERE id = ?", [usage_id]);

        // Calculate total cost
        const total_cost = charge_rate * call_minutes;

        // Insert into Charges table
        const result = await conn.query(
            `INSERT INTO Charges (region_id, country_id, connect_charge_id, call_type_id, phone_type_id, usage_id, total_cost)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [region_id, country_id, connect_charge_id, call_type_id, phone_type_id, usage_id, total_cost]
        );

        return { id: result.insertId, total_cost };
    } finally {
        if (conn) conn.release();
    }
};

const deleteChargeById = async (id) => {
    let conn;
    try {
        conn = await pool.getConnection();
        await conn.query("DELETE FROM Charges WHERE id = ?", [id]);
        return { message: "Charge deleted successfully" };
    } finally {
        if (conn) conn.release();
    }
};

module.exports = { getAllCharges, addCharge, deleteChargeById };
